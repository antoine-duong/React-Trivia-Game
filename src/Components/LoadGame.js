// Config
import firebase from '../firebase';
// Modules
import { getDatabase, ref, onValue } from 'firebase/database';
import React, { useEffect, useState } from "react";
import LoadGameList from './LoadGameList';
// import loadgameList ()
    // iterate the response data to form a list -> its getting the data from the loadGame component
    // this component will be passed within the onValue 
    // return a list with a button attached to each list item -> onClick on that button === load previous game 

/* - How does it load the save?
1) Assign the selected saves to the display game component.
2) Optional: Remove the selected save from the save game list.
2a) Automatically 
2b) Provide an option for the user */

const LoadGame = (props)=>{
    const [data, setData] = useState([])
    // unsure of what loadList is accomplishing
    const [loadList, setLoadList] = useState(false)

    useEffect(() => {
        const database = getDatabase(firebase)
        const dbRef = ref(database)

        if (loadList) {
            onValue(dbRef, (response) => {
                const newState= []
    
                // < list of saved games components />
                const testData = response.val()
    
                for (let key in testData) {
                    // newState.push(testData[key])
                    newState.push(
                        [key, testData[key]]
                    )
                }
    
                setData(newState)
            })
        }
    }, [loadList])

    const handleLoadListState = (e)=>{
        e.preventDefault()
        return(
            setLoadList(true)
        )
    }

    return (
        <div className='loadGameSection'>
            <div>
                <div className='loadGame'>
                    <button onClick={(e)=>{handleLoadListState(e)}}>LIST OF SAVED GAMES</button>
                </div>
            </div>
            <ul>
            { data.map((data) => {
                return (
                    <li key={data[0]}>
                        {
                            console.log(data)
                        }
                    <p>Save Number: <span>{data[0]}</span></p>
                    <LoadGameList 
                        setStoreCombinedArray = {props.setStoreCombinedArray}
                        loadGame = {data}
                    />
                    {/* <p>{data[1]}</p> */}
              {/* <button onClick={() => { handleRemoveMovie(data.id) }}>Remove Movie</button> */}
                    </li>
                )
        }) }
            </ul>
        </div>
    );
}

export default LoadGame;