var exports = module.exports = {};

//exports.parse = function(args) {
exports.parse = function(args, defaults) {
  // Kiadni -------------------------------------
  var options = {};
  // v2 -----------------------------------------
  if (typeof defaults === "object" && !(defaults instanceof Array)) {
       options = defaults
   }
  // --------------------------------------------

  for(var i in args) {
    var arg = args[i];
    //Check if Long formed tag
    if (arg.substr(0, 2) === "--") {
      arg = arg.substr(2);
      //Check for equals sign
      if (arg.indexOf("=") !== -1) {
        arg = arg.split("=");
        var key = arg.shift();
        var value = arg.join("=");

        if (/^[0-9]+$/.test(value)) {
          value = parseInt(value, 10);
        }
        options[key] = value;
      }
    }
  }
  return options;
  // -------------------------------------
};
