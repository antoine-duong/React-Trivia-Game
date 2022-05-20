// Config
import firebase from '../firebase';
// Modules
import { getDatabase, ref, onValue } from 'firebase/database';
import React, { useState } from "react";

const LoadGameList = (props) => {
    const[loadGameArray, setLoadGameArray] = useState([])
    console.log("loadgamelist", props.loadGame[1])

    props.loadGame[1][1].forEach((test) => {
        console.log("hello", test)
    })

    const handleClick = (id) => {
        const database = getDatabase(firebase)
        const dbRef = ref(database, `/${id}`)
        console.log(dbRef)
        onValue(dbRef, (data) => {
            // create a piece of state that will hold the list of questions that data.val() is returning to us
            setLoadGameArray(data.val()[1])
        })
    }

    const firebaseTest = props.loadGame[0]

    return(
    <div>
        <button onClick = {() => handleClick(firebaseTest)}>load this game</button>
        {props.setStoreCombinedArray(loadGameArray)}
    </div>
    )

    // for each data point saved (aka each saved game in firebase) create a button that:
        // WHEN CLICKED is able to re-render the page based on the score and # of question paramters
}

export default LoadGameList