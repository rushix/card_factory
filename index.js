const ncp = require('ncp').ncp;
const extend = require('util')._extend;

ncp.limit = 16;

class CardFactory {
  constructor() {
  
  }

}


let defaultConfig = {
  source: "./debug/testsource",
  destination: "./debug/secondsourcei",
  cusomValue: "1234321"
}

let params = {}
process.argv.slice(2).forEach( (param, paramIndex) => {
  let parsedParams = param.split(':');
  params[parsedParams[0]] = parsedParams[1];

} );

if (params.config) {
  let config = require(params.config);
  config = extend(defaultConfig, config);

  console.log(config);
}

/*
ncp(source, destination, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('done!');
});
*/
