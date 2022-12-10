import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { attempts_Number, earnPoints_Number } from '../helper/helper';

export default function Answer() {
    const dispatch = useDispatch();

    const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state);

    const attempts = attempts_Number(result);
    const correct = earnPoints_Number(result, answers, 1)
    const wrong = result.length - correct;

    // find the wrong/unanswered question and corrrect options
    const a = result.map((element, i) => answers[i] === element);
    const index = [];
    a.forEach((element, i) => {
        if (element === false) {
            index.push(i)
        }
    });

    return (
        <div className='container'>
            <h1 className='title'>review</h1>
            <p>Hi, {userId}!</p>
            <p>You attemped {attempts} questions, and you got {correct} questions correct.</p>
            <p>Here are the answers for the {wrong} wrong/unanswered ones:</p>
            {index.map((element,i) => (
                <div className='answer' key={i}>
                    <h2>Question {queue[element].id}</h2>
                    <p>{queue[element].question}</p>
                    <p>Correct answer: {queue[element].options[answers[element]]}</p>
                </div>
            ))}

            <div className='flex'>
                <div className="start">
                    <Link className='btn' to={'/result'}>Back</Link>
                </div>
            </div>
        </div>
    )
}