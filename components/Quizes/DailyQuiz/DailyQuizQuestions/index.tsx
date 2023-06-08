import React from 'react'
import { useState } from 'react'
import styles from "./index.module.css";
import Link from 'next/link';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';

const quiz = {
    totalQuestions: 2,
    questions: [
        {
            question:
                'Thinking about yourself, on average, to what extent have you felt this way during the past few hours?',
            questionWord: 'Positive Activation',
            options: [
                { id: 0, text: 'Not at all', score: 1 },
                { id: 1, text: 'Slightly', score: 2 },
                { id: 2, text: 'Moderately', score: 3 },
                { id: 3, text: 'Considerably', score: 4 },
                { id: 4, text: 'A great deal', score: 5 }],
            type: 'MCQs'
        },
        {
            question:
                'Thinking about yourself, on average, to what extent have you felt this way during the past few hours?',
            questionWord: 'Negative Activation',
            options: [
                { id: 0, text: 'Not at all', score: 5 },
                { id: 1, text: 'Slightly', score: 4 },
                { id: 2, text: 'Moderately', score: 3 },
                { id: 3, text: 'Considerably', score: 2 },
                { id: 4, text: 'A great deal', score: 1 }],
            type: 'MCQs'
        }
    ],
}
const questionSteps = {
    steps: [
        {
            questionNumber: '1'
        },
        {
            questionNumber: '2'
        }
    ]
}

const DailyQuizQuestions = () => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [activeStep, setActiveStep] = useState(0)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1)
    const [showQuiz, setShowQuiz] = useState(true)

    const onClickNext = () => {
        if (activeStep < questions.length - 1) {
            setActiveQuestion((prev) => prev + 1)
            setActiveStep((prev) => prev + 1)
            console.log(activeStep, questions.length)
        }
        else {
            setShowQuiz(false)
            console.log('Quiz is finished')
        }
    }

    console.log('index', selectedAnswerIndex)
    const { questions } = quiz
    const { question, questionWord, options } = questions[activeQuestion]
    const { steps } = questionSteps
    const { questionNumber } = steps[activeStep]
    return (
        <div className={styles.mainDiv}>
            <div className={`${styles.stepsDiv} ${showQuiz ? '' : styles.hideSteps}`}>
                <div className={questionNumber === "1" ? styles.activeQuestion : styles.inactiveQuestion}></div>
                <div className={questionNumber === "2" ? styles.activeQuestion : styles.inactiveQuestion}></div>
            </div>
            {showQuiz ? (
                <section>
                    <div className={styles.componentDiv}>
                        <div className={styles.quetionText}>{question}</div>
                        <div className={styles.questionWord}><button disabled>{questionNumber}. {questionWord}</button></div>
                        <ul>
                            {options.map((option) => (
                                <li key={option.id}>
                                    {option.text}
                                </li>
                            ))}
                        </ul>
                        <button className={styles.nextButton} onClick={onClickNext}>Next</button>
                    </div>
                </section>
            ) :
                <div className={styles.componentDiv}>
                    <div className={styles.wrapperDiv}>                             
                    <div className={styles.circleDiv}>
                        <div className={styles.innerCircleDiv}>
                    {/* <AiOutlineCheckCircle size={60}/> */}
                    <AiFillCheckCircle/>
                        </div>
                    </div>
                    </div>
                    <div className={styles.finishDiv}>
                        <div className={styles.title}>Finished</div>
                        <div className={styles.bodyText}>Thanks for your time!</div>
                        <Link href='/dashboard'>
                            <div className={styles.finishButton}>
                                <button>Back to Profile</button>
                            </div>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default DailyQuizQuestions