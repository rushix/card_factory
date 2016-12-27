'use strict';

const fs = require('fs'),
      path = require('path'),
      xutil = require('./Xutil.js');

String.prototype.allReplace = xutil.allReplace;

module.exports = class Xfs {

  static makeFile(source, destination, option, callback) {
    try {
    
      xutil.uglify(option, (error, uglyOption) => {
        if (error) throw error;

        fs.stat(destination, (error, stat) => {
          if (error == null) {

            fs.unlink(destination, (error) => {
              if (error) throw error;

              this.writeFile(source, destination, uglyOption, (error) => {
                if (error) throw error;
            
              });
            });
          } else if (error.code == 'ENOENT') {
            this.writeFile(source, destination, uglyOption, (error) => {
              if (error) throw error;

            });
          } else {
            if (error) throw error;
          
          }
          
        });
      });

    } catch (error) {
      callback(error);
    }

    callback(null, destination);
  }

  static writeFile(source, destination, option, callback) {
    try {

      fs.readFile(source, (error, file) => {
        if (error) throw error;

        const replaced = file.toString().allReplace(option);
        fs.writeFile(destination, replaced, (error) => {
          if (error) throw error;

        });
      });

    } catch (error) {
      callback(error);
    }
  }

};
