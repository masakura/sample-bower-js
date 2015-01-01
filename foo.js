window.testmator = (function () {
  'use strict';

  var extend = function (protoProps, staticProps) {
    var parent = this;
    var child = function () {
      return parent.apply(this, arguments);
    };

    // Inherit static properties.
    _.extend(child, parent, staticProps);

    var Surrogate = function () {
      this.constructor = child;
    };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();

    // Inherit prototype properties.
    if (protoProps) {
      _.extend(child, protoProps);
    }

    return child;
  };

  var PageObject = function () {
  };

  _.extend(PageObject, {
    extend: extend
  });

  return _.extend({}, {
    name: 'testmator',
    PageObject: PageObject
  });
})();
