define('lodash/internal/createPadding', ['exports', 'lodash/string/repeat', 'lodash/internal/root'], function (exports, repeat, root) {

  'use strict';

  var nativeCeil = Math.ceil,
      nativeIsFinite = root['default'].isFinite;

  /**
   * Creates the padding required for `string` based on the given `length`.
   * The `chars` string is truncated if the number of characters exceeds `length`.
   *
   * @private
   * @param {string} string The string to create padding for.
   * @param {number} [length=0] The padding length.
   * @param {string} [chars=' '] The string used as padding.
   * @returns {string} Returns the pad for `string`.
   */
  function createPadding(string, length, chars) {
    var strLength = string.length;
    length = +length;

    if (strLength >= length || !nativeIsFinite(length)) {
      return '';
    }
    var padLength = length - strLength;
    chars = chars == null ? ' ' : chars + '';
    return repeat['default'](chars, nativeCeil(padLength / chars.length)).slice(0, padLength);
  }

  exports['default'] = createPadding;

});