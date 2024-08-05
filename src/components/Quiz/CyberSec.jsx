import React, { useRef, useState } from 'react'
import './Quiz.css'
import { Link } from 'react-router-dom';
import { Cyber } from '../../assets/Cyber'

const CyberSec = () => {
    let [index, setIndex] = useState(0)
    let [question, setQuestion] = useState(Cyber[index])
    let [lock, setLock] = useState(false)
    let [score, setScore] = useState(0)
    let [result, setResult] = useState(false)
    let [optionSelected, setOptionSelected] = useState(false)

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);
    let option_array = [Option1, Option2, Option3, Option4]

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                e.target.classList.add("correct");
                setLock(true)
                setScore(prev => prev + 1)
            } else {
                e.target.classList.add("wrong");
                setLock(true)
                option_array[question.ans - 1].current.classList.add("correct");
            }
            setOptionSelected(true)
        }
    }

    const next = () => {
        if (index == Cyber.length - 1) {
            setResult(true)
        } else if (lock === true) {
            setIndex(++index)
            setQuestion(Cyber[index])
            setLock(false)
            setOptionSelected(false)
            option_array.map((option) => {
                option.current.classList.remove("correct", "wrong")
                return null
            })
        }
    }

    const reset = () => {
        setIndex(0)
        setQuestion(Cyber[0])
        setScore(0)
        setLock(false)
        setResult(false)
        setOptionSelected(false)
    }

    return (
        <div>
            <div className='container'>
                <h1>Cyber Security</h1>
                <hr />
                {result ? <>
                    <h2>You scored {score} out of {Cyber.length}</h2>
                    <button className='reset' onClick={reset}>Reset</button>
                </> : <>
                    <h2 className='question'>{index + 1}. {question.question}</h2>
                    <ul className='opt'>
                        <li ref={Option1} onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
                        <li ref={Option2} onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
                        <li ref={Option3} onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>
                        <li ref={Option4} onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
                    </ul>
                    <button className='next' onClick={next} disabled={!optionSelected}>Next</button>
                    <div className="index">
                        {index + 1} of {Cyber.length} questions
                    </div>
                </>}
            </div>
            <button className='btn'>
                 <Link style={{ textDecoration: 'none', color: 'white' }} to="/">Back to Home</Link>
                </button>
        </div>
    )
}

export default CyberSec;
