import React from 'react'

function refreshPage() {
    window.location.reload(false);
}
export default function Modal({isCorrect, solution}) {
    return (
        <div className="modal">
            {isCorrect && (
                <div>
                    <h1 className="font">U heeft gewonnen!</h1>
                    <p className="font">Het juiste antwoord was:</p>
                    <p className="solution">{solution}</p>
                    <button onClick={refreshPage}>Speel Opnieuw</button>
                </div>
            )}
            {!isCorrect && (
                <div>
                    <h1 className="font">Helaas, uw pogingen zijn op!</h1>
                    <p className="font">Het juiste antwoord was:</p>
                    <p className="solution">{solution}</p>
                    <button onClick={refreshPage}>Speel Opnieuw</button>
                </div>
            )}
        </div>
    )
}