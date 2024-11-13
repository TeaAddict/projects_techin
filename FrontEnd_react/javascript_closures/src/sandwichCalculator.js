"use strict";

function kitchen() {
  function addBread() {
    console.log("Now adding bread");
  }

  function spreadSoya() {
    console.log("Now spreading soya");
  }

  function addJam() {
    console.log("Now spreading the jam!");
  }

  function makeSandwich() {
    addBread();
    spreadSoya();
    addJam();
  }
  return makeSandwich;
}
const makeSandwich = kitchen();
makeSandwich();
