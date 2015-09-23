var expect = require("chai").expect;
var tags = require("./tags.js");

describe("Tags", function(){
  describe("#parse()", function() {
    var args;
    before(function(){
      args = ["--depth=4", "--hello=world"];
    });

    it("should parse long formed tags", function(){
      var results = tags.parse(args);

      expect(results).to.have.property("depth", 4);
      expect(results).to.have.property("hello", "world");
    });

    it("should fallback to defaults", function(){
      var defaults = {depth: 2, foo: "bar"};

      var results = tags.parse(args, defaults);

      var expected = {
        depth: 4,
        foo: "bar",
        hello: "world"
      };

      expect(results).to.deep.equal(expected);
    });
  });
});