import { useState } from 'react'

const useWordle = () => {
    const[turn, setTurn] = useState(0)
    const[currentGuess, setCurrentGuess] = useState('')
    const[guesses, setGuesses] = useState([])
    const[history, setHistory] = useState([])
    const[isCorrect, setIsCorrect] = useState(false)

    const formatGuess = () => {

    }

    const addNewGuess = () => {

    }

    const handleKeyup = ({ key }) => {
        console.log(key)

        //creates rules for submitting a word
        if(key === 'Enter'){
            if(turn < 5){

            }
            if(history.includes(currentGuess)) {

            }

        }

        //removes a letter if Backspace is pressed
        if(key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }

        //checks if the keyboard input is an alphabetical letter, if so it sends it to the screen
        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {

                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}

export default useWordle