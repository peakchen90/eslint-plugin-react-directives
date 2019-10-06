/**
 * 返回settings
 * @param context
 * @return {{prefix: string, pragmaType: string}}
 */
function getSettings(context) {
  const settings = {
    prefix: 'x',
    pragmaType: 'React'
  };

  if (context.settings && context.settings['react-directives']) {
    const prefix = context.settings['react-directives'].prefix;
    const pragmaType = context.settings['react-directives'].pragmaType;

    if (prefix !== undefined && (typeof prefix !== 'string' || prefix.length === 0)) {
      throw new Error('The settings option `prefix` should be a non-empty string.');
    }
    if (pragmaType !== undefined && (typeof pragmaType !== 'string' || pragmaType.length === 0)) {
      throw new Error('The settings option `pragmaType` should be a non-empty string.');
    }

    settings.prefix = prefix || 'x';
    settings.pragmaType = pragmaType || 'React';
  }

  return settings;
}

module.exports = {
  getSettings
};
