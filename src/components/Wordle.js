import React, {useEffect} from 'react'
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";

export default function Wordle({ solution }) {
    const {currentGuess,handleKeyup, guesses, isCorrect, turn} = useWordle(solution)

    //it adds an event to check for user input from the keyboard, it then removes it again as to not clog up the state
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        return () => window.removeEventListener('keyup', handleKeyup)
        },[handleKeyup])

    useEffect(() => {
        console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect])

    return(
        <div>
        <div>current guess - {currentGuess}</div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        </div>
    )
}

