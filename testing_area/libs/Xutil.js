'use strict';

module.exports = class Xutil{

  static clone(obj, callback) { callback(null, Object.assign({}, obj)); }

  static allReplace(obj) {
    let text = this;
    for (let x in obj) text = text.replace(new RegExp(x, 'gi'), obj[x]);
    return text;
  }

  static uglify(obj, callback) {
    for (let key in obj) {
      obj['-=-' + key + '-=-'] = obj[key];
      delete obj[key];
    }

    callback(null, obj);
  }

};

