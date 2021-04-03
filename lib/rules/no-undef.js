const baseRule = require('eslint/lib/rules/no-undef');
const { getSettings } = require('../util');

/**
 * Checks if the given node is the argument of a typeof operator.
 * @param {ASTNode} node The AST node being checked.
 * @returns {boolean} Whether or not the node is the argument of a typeof operator.
 */
function hasTypeOfOperator(node) {
  const parent = node.parent;
  return parent.type === 'UnaryExpression' && parent.operator === 'typeof';
}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'disallow the use of undeclared variables unless mentioned in `/*global */` comments',
      category: 'Variables',
      recommended: true
    },
    schema: baseRule.meta.schema,
    messages: baseRule.meta.messages
  },

  create(context) {
    const options = context.options[0];
    const { prefix } = getSettings(context);

    // eslint-disable-next-line no-mixed-operators
    const considerTypeOf = options && options.typeof === true || false;

    let ignoreIdentifier;

    /**
     * 检查节点是否在在指定父节点下
     * @param node
     * @param parentNode
     * @return {boolean}
     */
    function checkParent(node, parentNode) {
      let current = node;
      while (current !== null) {
        if (current.parent === parentNode) {
          return true;
        }
        current = current.parent;
      }
      return false;
    }

    return {
      Program(/* node */) {
        ignoreIdentifier = new Set();
      },

      'Program:exit': function (/* node */) {
        const globalScope = context.getScope();

        globalScope.through.forEach(ref => {
          const identifier = ref.identifier;

          if (!considerTypeOf && hasTypeOfOperator(identifier)) {
            return;
          }

          if (ignoreIdentifier.has(identifier)) {
            return;
          }

          context.report({
            node: identifier,
            messageId: 'undef',
            data: identifier
          });
        });
      },

      JSXAttribute(node) {
        const unresolved = context.getScope().through;

        if (unresolved.length === 0) {
          return;
        }
        if (node.name.name !== `${prefix}-for`) {
          return;
        }
        if (!node.value || node.value.type !== 'JSXExpressionContainer') {
          return;
        }
        if (node.value.expression.type !== 'BinaryExpression'
          || node.value.expression.operator !== 'in'
        ) {
          return;
        }

        const names = [];
        const left = node.value.expression.left;

        if (left.type === 'Identifier') {
          names.push(left.name);
        } else if (left.type === 'SequenceExpression') {
          left.expressions.forEach((n, i) => {
            if (i <= 1 && n.type === 'Identifier') {
              names.push(n.name);
            }
          });
        }

        if (names.length > 0) {
          const scopeElement = node.parent.parent;
          unresolved.forEach(({ identifier }) => {
            if (names.includes(identifier.name) && checkParent(identifier, scopeElement)) {
              ignoreIdentifier.add(identifier);
            }
          });
        }
      },
    };
  }
};
