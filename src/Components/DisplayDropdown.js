// Config
// Modules
import React, { useState } from "react";
// Components
import QuizCall from "./QuizCall";

const DisplayDropdown = ({ getCategory, setCombinedArray, storeCombinedArray }) => {
  // Declaring state variables to store user selected values from dropdown in state
  const [category, setCategory] = useState();
  const [questionCount, setQuestionCount] = useState();
  // userSelection function to save category id
  const userSelection = (e) => {
    // we were told to save this "categorySelected" variable within state
    const categorySelected = e.target.value;
    setCategory(categorySelected);
    // console.log("The ID for this category is:", categorySelected);
  };
  //   questionSelection function to save number of questions selected by user
  const questionSelection = (number) => {
    const numberSelected = number.target.value;
    setQuestionCount(numberSelected);
    // console.log(numberSelected);
  };
  // Creating array that is used for number of questions dropdown
  const numberArray = [];

  for (var i = 1; i <= 20; i++) {
    numberArray.push({ number: i });
  }

  return (
    //   rendering components of the page
    <section>
      {/* Code for game category dropdown */}
      <div>
        <form>
          <select
            defaultValue="gameCategory"
            name="category"
            id="category"
            onChange={userSelection}
          >
            <option
              value="gameCategory"
              id="gameCategory"
              key="gameCategory"
              disabled
            >
              Pick a game category!
            </option>
            {getCategory.map((category) => {
              const { name, id } = category;
              return (
                <option value={id} id={id} key={`${id}-category`}>
                  {name}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      {/* Code for number of questions dropdown */}
      <div>
        <form action="">
          <select
            name="number"
            id="number"
            defaultValue="defaultNumber"
            onChange={questionSelection}
          >
            <option
              value="defaultNumber"
              id="defaultNumber"
              key="defaultNumber"
              disabled
            >
              Pick a number of questions!
            </option>
            {numberArray.map((numberDisplay) => {
              const { number } = numberDisplay;
              return (
                <option value={number} id={number} key={`${number}-questCount`}>
                  {number}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <QuizCall
        storeCombinedArray = {storeCombinedArray}
        setCombinedArray = {setCombinedArray} 
        questionCount = { questionCount } 
        category = { category }
      />
    </section>

  );
};

export default DisplayDropdown;
