import { useState } from 'react'

const useWordle = (solution) => {
    const[turn, setTurn] = useState(0)
    const[currentGuess, setCurrentGuess] = useState('')
    const[guesses, setGuesses] = useState([...Array(6)])
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

    const addNewGuess = (formattedGuess) => {
        //if the solution is the same as the input, the boolean value is set to true and the game ends.
        if (currentGuess === solution) {
            setIsCorrect(true)
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn) => {
            return prevTurn + 1
        })
        setCurrentGuess('')
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
            addNewGuess(formatted)
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
            //checks to see that the user input is not longer then 5 characters
            if (currentGuess.length < 5) {
                //it adds the newest input together with the previous input to form a string.
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}

export default useWordle