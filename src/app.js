/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["a", "the"];
  let subject = ["pilot", "actor", "plumber", "bearcat", "dog"];
  let action = ["took my", "threw my", "burned my", "stole my", "yelled at my"];
  let possession = ["homework", "volleyball", "laptop", "father's ashes"];
  let where = [
    "in my room",
    "at the store",
    "in the air",
    "in my car",
    "at my grandma's"
  ];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subjIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subjIndex] +
    " " +
    action[actionIndex] +
    " " +
    possession[possessionIndex] +
    " " +
    where[whereIndex]
  );
};
