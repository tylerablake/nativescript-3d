var Ns3d = require("nativescript-ns3d").Ns3d;
var ns3d = new Ns3d();

describe("greet function", function() {
    it("exists", function() {
        expect(ns3d.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(ns3d.greet()).toEqual("Hello, NS");
    });
});