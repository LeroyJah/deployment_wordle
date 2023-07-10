import { useState } from 'react'

const useWordle = (solution) => {
    const[turn, setTurn] = useState(0)
    const[currentGuess, setCurrentGuess] = useState('')
    const[guesses, setGuesses] = useState([])
    const[history, setHistory] = useState([' '])
    const[isCorrect, setIsCorrect] = useState(false)

    const formatGuess = () => {
        console.log('Guess meets requirements, being processed...', currentGuess)
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((l) => {
            return {key: l, color: 'grey'}
        })

        formattedGuess.forEach((l, i) => {
            if (solutionArray[i] === l.key) {
                formattedGuess[i].color = 'green'
                solutionArray[i] = null
            }
        })

        formattedGuess.forEach((l, i) => {
            if (solutionArray.includes(l.key) && l.color !== 'green') {
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })

        return formattedGuess
    }

    const addNewGuess = () => {

    }

    const handleKeyup = ({ key }) => {
        console.log(key)

        //creates rules for submitting a word
        if(key === 'Enter'){
            if(turn > 5){
                console.log("You've used all your guesses. Game Over.")
                return
            }
            if(history.includes(currentGuess)) {
                console.log('This world is already used.')
                return
            }
            if(currentGuess.length !==5) {
                console.log('Word did not meet the required 5 letters.')
                return
            }
            const formatted = formatGuess()
            console.log(formatted)
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