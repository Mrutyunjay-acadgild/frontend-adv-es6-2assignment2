/* ================================================================= */
/**
  * Map object are simple key/value maps. Both object and primitive values can 
  * be used as key or value in map.
  * Although Map looks similar to Object, its worth noting that keys of Object  
  * are strings while there is no such restriction for a Map. Also Map size can 
  * be retrieved like an array while this is not the case with Objects.
  */
 /* ================================================================= */

var a = {};
var b = 20;
var c = "Avnesh";

var m = new Map();

m.set(a, 100);
m.set(b, "Shakya");
m.set(c, {org: "Acadgild"});

m.get(a); // 100
m.get(b); // "Shakya"
m.get(c); // {org: "Acadgild"}

m.size; // 3

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;



/* ================================================================= */
/**
  * Set is a collection of unique values. A Set can be iterated in order of
  * insertion of its elements.
 */
/* ================================================================= */

var testTest = new Set();

testTest.add(1);
testTest.add(12);
testTest.add("three");

testTest.has(1); // true

testTest.size; // 3

testTest.delete(12); // removes 12 from testTest

// multiple in sigle line
var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;