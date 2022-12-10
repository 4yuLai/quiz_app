import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { moveNextAction, movePrevAction } from '../redux/question_reducer';
import { PushAnswer } from '../hooks/setResult';
import { Navigate } from 'react-router-dom';
import Questions from './Questions';

export default function Quiz() {
    const [check, setChecked] = useState(undefined);
    const dispatch = useDispatch();

    const { questions } = useSelector((state) => state);
    const { result } = useSelector(state => state);

    const trace = questions.trace;
    const queue = questions.queue;

    // next question (final one => sumbit)
    function onNext() {
        dispatch(moveNextAction());
        if (result.result.length <= trace) {
            dispatch(PushAnswer(check));
        }
        setChecked(undefined);
    }

    // prev question
    function onPrev() {
        dispatch(movePrevAction());
    }

    // checked
    function onChecked(check) {
        setChecked(check);
    }

    // link to result page
    if (result.result.length && result.result.length >= queue.length) {
      return (
        <Navigate
          to={'/result'}
          replace={true}
        />
      );
    }

    return (
    <div className='container'>
            <h1 className='title text-light'>Question {trace + 1} / {queue.length}</h1>

            <Questions onChecked={onChecked} />

        <div className='grid'>
            { trace > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
                <button className='btn next' onClick={onNext}>{(trace == queue.length-1 && result.result.length >= queue.length-1) ? 'Submit' : 'Next'}</button>
        </div>
    </div>
    )
}
