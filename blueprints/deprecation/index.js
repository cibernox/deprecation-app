/* eslint-env node */
module.exports = {
  description: 'Generate a new deprecation file',

  locals(options) {
    // Return custom template variables here.
    return {
      name: options.entity.name
    };
  }
};
