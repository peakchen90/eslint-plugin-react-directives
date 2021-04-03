/**
 * 返回settings
 * @param context
 * @return {{prefix: string}}
 */
function getSettings(context) {
  const settings = {
    prefix: 'x'
  };

  if (context.settings && context.settings['react-directives']) {
    const prefix = context.settings['react-directives'].prefix;

    if (prefix !== undefined && (typeof prefix !== 'string' || prefix.length === 0)) {
      throw new Error('The settings option `prefix` should be a non-empty string.');
    }

    settings.prefix = prefix || 'x';
  }

  return settings;
}

module.exports = {
  getSettings
};
