'use strict';

const xfs = require('./libs/Xfs.js'),
      xutil = require('./libs/Xutil.js');

String.prototype.allReplace = xutil.allReplace;

const source = 'test_file.gth';
const destination = 'test_file_o.gth';

let options = [
  {
    "id": 1,
    "placeholder": "somename",
    "accedent": "anydata"
  },
  {
    "id": 2,
    "placeholder": "anothername",
    "accedent": "otherdata"
  }
];

let nerdOpt = Object.assign({}, options);
// console.log(nerdOpt);
// xutil.clone(options, (e, p) => { console.log(p) });

xutil.clone(options, (error, params) => {

  // console.log(params);

  for (let option of params) {

    xfs.makeFile(
      source,
      option.id + destination,
      option,
      (error, destination) => {
        if (error) console.error(error);
        else console.log("file " + destination + " sucessfuly made\n");
      }
    );

  }

  console.log(params);
  console.log(options);

});
