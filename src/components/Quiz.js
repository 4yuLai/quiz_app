import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Questions from './Questions'



export default function Quiz() {

    function onNext() {
        console.log("next question.");
    }

    function onPrev() {
        console.log("Previous question.");
    }

    return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        {/* display questions */}
        <Questions />

        <div className='grid'>
            <button className='btn prev' onClick={onPrev}>Prev</button>
            <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
    )
}
