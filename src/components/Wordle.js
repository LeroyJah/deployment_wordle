import React, {useEffect, useState} from 'react'
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Modal from "./Modal"

export default function Wordle({ solution }) {
    const {currentGuess,handleKeyup, guesses, isCorrect, turn} = useWordle(solution)
    const [showModal, setShowModal] = useState(false)

    //it adds an event to check for user input from the keyboard, it then removes it again as to not clog up the state
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if (isCorrect) {
            console.log('U heeft gewonnen!')
            setTimeout(() => setShowModal(true), 1500)
            window.removeEventListener('keyup', handleKeyup)
        }

        if (turn > 5) {
            console.log('Helaas, uw pogingen zijn op!')
            setTimeout(() => setShowModal(true), 1500)
            window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
        },[handleKeyup, isCorrect, turn])

    useEffect(() => {
        console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect])

    return(
        <div>
        {/*<div>current guess - {currentGuess}</div>*/}
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            {showModal && <Modal isCorrect={isCorrect} solution={solution}/>}
        </div>
    )
}

