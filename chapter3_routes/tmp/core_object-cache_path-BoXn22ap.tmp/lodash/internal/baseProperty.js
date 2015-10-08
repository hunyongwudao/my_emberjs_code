define('lodash/internal/baseProperty', ['exports'], function (exports) {

  'use strict';

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new function.
   */
  function baseProperty(key) {
    return function (object) {
      return object == null ? undefined : object[key];
    };
  }

  exports['default'] = baseProperty;

});