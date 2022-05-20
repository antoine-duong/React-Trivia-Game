// Config
import axios from "axios";
// Modules
import React, { useEffect, useState } from "react";
// Components

const QuizCall = ({ category, questionCount, setCombinedArray, storeCombinedArray }) => {

  const [questionDetail, setQuestionDetail] = useState([])
  const [displayArray, setDisplayArray] = useState([])

  // Fire the API call whenever user have finished choosing BOTH of the dropdown lists - NOT DISPLAYING the game yet.
  useEffect(() => {
      axios({
        url: `https://opentdb.com/api.php?`,
        method: "GET",
        dataResponse: "json",
        params: {
          amount: questionCount,
          category: category,
          type: "multiple",
          encode: "url3986"
        }
      }).then((response) => {
        const responseData = response.data.results
        setQuestionDetail(responseData)
      })
  }, [category, questionCount]);

  // Build a new array to store all the data gotten back from the API in the order we want them to be in.
  const combinedArray = questionDetail.map((question, index) => {
    const goodChoice = question.correct_answer;
    const badChoice = [...question.incorrect_answers];
    // Generate a random index based on the length of the badChoice array + 1 => from index 0 to end-index (3 in this case) of the newly spliced array with all choices
    const randomIndex = Math.floor(Math.random() * (badChoice.length + 1));
    badChoice.splice(randomIndex, 0, goodChoice);
    const allChoice = badChoice;
    return {
      key: index,
      question: question.question,
      choices: allChoice,
      goodChoice: goodChoice,
      score: 0,
      disabledButton: question.key,
      clicked: true
    }
  })

  const handleCategoryConfirm = (e, callBack)=>{
    e.preventDefault();
    callBack();
  }
  // Pass the data of the combinedArray (reconstruct array) in two directions: to the return of this component to be displayed AND back to the main App.js to be used in SaveGame
  const handleArrayAssignment = ()=>{
    setDisplayArray([...combinedArray])
    setCombinedArray([...combinedArray])
    if (storeCombinedArray.length !== 0) {
      setDisplayArray([...storeCombinedArray])
    }
  }

  // code for userValue and counter below
  // 1) store all correct answers returned in an array
  const [storeCorrectAnswer, setStoreCorrectAnswer] = useState()
  const [counter, setCounter] = useState(0)

  const correctAnswer = questionDetail.map((test) => {
    return decodeURIComponent(test.correct_answer)
  })

  // 2) get user selected value by targeting e.target.value 
  const userAnswerSelection = (e) => {
    const userAnswer = e.target.value
    setStoreCorrectAnswer(userAnswer)
    console.log("user selection is:"
    , userAnswer)
  }

  // 3) OnClick function that checks if user selected value is within correct answer array (the button can be clicked multiple time - so assumption is the user answers each question sequentially)
  const checkCorrectAnswer = (e) => {
    e.preventDefault()
    // right now, disabled ALL buttons for future questions when clicked - commenting out for now
    // setDisable(true)

    if (correctAnswer.indexOf(storeCorrectAnswer) > -1) {
        setCounter(counter + 1)
        console.log("hell ya") }
    else {
        console.log("incorrect answer")
        console.log(storeCorrectAnswer)
    }
}

  console.log("counter is now:", counter)

  const finalScore = (e) => {
      e.preventDefault()
      return(
          alert(`You scored ${counter}/${questionCount}!!`)
      )
  }

  return (
    <div>
      <button 
      onClick = {(e)=>{ 
        handleCategoryConfirm(e, 
        handleArrayAssignment) 
      }}>
        Confirm Selections
      </button>
      {
        displayArray.map((question) => {
          return(
            <div key={`${question.key}-id`}>
              <h2>{decodeURIComponent(question.question)}</h2>
              <form  className="choicesWrapper">
                {
                  question.choices.map((questionAnswer) => {
                    return(
                      <li 
                      key={`${question.key}${decodeURIComponent(questionAnswer)}-id`} 
                      >
                        <input 
                        id={`${question.key}${decodeURIComponent(questionAnswer)}-id`}
                        name="answer" 
                        type="radio"
                        value={decodeURIComponent(questionAnswer)}
                        onChange={userAnswerSelection} 
                        />
                        <label 
                        htmlFor={`${question.key}${decodeURIComponent(questionAnswer)}-id`}
                        >
                          <span role="img" aria-label="red question mark" className="leftMarking">❓</span> {decodeURIComponent(questionAnswer)} <span role="img" aria-label="white question mark"className="rigtMarking">❔</span>
                        </label>
                      </li>
                    )
                  })
                }
                <button
                  // disabled={disable} 
                  onClick={checkCorrectAnswer}
                >Confirm choice</button>
              </form>
            </div>
          )
        })
      }
      <button className="submitButton"
      onClick={finalScore}>Submit Quiz!</button>
    </div>
  );
}

export default QuizCall;