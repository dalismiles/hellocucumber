const assert = require("assert");
const { Given, When, Then } = require("cucumber");
let app = require("../../../src/app");

// Given("today is Monday", function () {
//   this.today = "Monday";
// });

// Given("today is Friday", function () {
//     this.today = "Friday";
//   });

// When("I ask whether it's Friday yet", function () {
//   this.actualAnswer = app.isItFriday(this.today);
// });

// Then("I should be told {string}", function (expectedAnswer) {
//   assert.equal(this.actualAnswer, expectedAnswer);
// });

Given("today is {string}", function (givenDay) {
  this.today = givenDay;
});

When("I ask whether it's Friday yet", function () {
  this.actualAnswer = app.isItFriday(this.today);
});

Then("I should be told {string}", function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});
