const baseRule = require('eslint/lib/rules/no-unused-vars');
const { getSettings } = require('../util');

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow unused variables',
      category: 'Variables',
      recommended: 'warn'
    },
    schema: baseRule.meta.schema,
    messages: baseRule.meta.messages
  },

  create(context) {
    const rules = baseRule.create(context);
    const { prefix, pragmaType } = getSettings(context);

    function checkUseData(stateName, setStateName) {
      const references = context.getScope().references;
      const valid = references.find(({ identifier }) => {
        if (identifier.name !== stateName) {
          return false;
        }

        let parent = identifier.parent;
        while (parent && parent.type === 'MemberExpression') {
          parent = parent.parent;
        }

        return parent
          && parent.type === 'JSXExpressionContainer'
          && parent.parent.type === 'JSXAttribute'
          && parent.parent.name.name === `${prefix}-model-hook`;
      });

      if (valid) {
        context.markVariableAsUsed(setStateName);
      }
    }

    /**
     * 检测是否是useState的设置方法
     * @param node
     */
    function checkIsSetMethod(node) {
      if (node.id.type === 'ArrayPattern') {
        const targetState = node.id.elements[0];
        const targetSetState = node.id.elements[1];
        if (targetState && targetState.type === 'Identifier'
          && targetSetState && targetSetState.type === 'Identifier'
        ) {
          checkUseData(targetState.name, targetSetState.name);
        }
      } else if (node.id.type === 'ObjectPattern') {
        const targetState = node.id.properties.find(p => p.key.type === 'Literal' && p.key.value === 0);
        const targetSetState = node.id.properties.find(p => p.key.type === 'Literal' && p.key.value === 1);
        if (targetState && targetState.value.type === 'Identifier'
          && targetSetState && targetSetState.value.type === 'Identifier'
        ) {
          checkUseData(targetState.value.name, targetSetState.value.name);
        }
      }
    }

    return {
      ...rules,

      VariableDeclarator(node) {
        if (!node.init || node.init.type !== 'CallExpression') {
          return;
        }

        if (!node.id || (node.id.type !== 'ArrayPattern' && node.id.type !== 'ObjectPattern')) {
          return;
        }

        const callee = node.init.callee;
        if (callee.type === 'MemberExpression'
          && callee.object.type === 'Identifier'
          && callee.object.name === pragmaType
          && (callee.property.name === 'useState'
            || callee.property.value === 'useState'
          )) {
          checkIsSetMethod(node);
        } else if (callee.type === 'Identifier'
          && callee.name === 'useState'
        ) {
          checkIsSetMethod(node);
        }
      }
    };
  }
};
