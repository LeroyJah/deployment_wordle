import { useState } from 'react'

const useWordle = () => {
    const[turn, setTurn] = useState(0)
    const[currentGuess] = useState('')
    const[guesses, setGuesses] = useState([])
    const[history, setHistory] = useState([])
    const[isCorrect, setIsCorrect] = useState(false)

    const formatGuess = () => {

    }

    const addNewGuess = () => {

    }

    const handleKeyup = () => {

    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}

export default useWordle