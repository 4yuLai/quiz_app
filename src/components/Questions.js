import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* custom hook */
import { useFetchQuestion } from '../hooks/fetchQuestion';
import { updateResultAction } from '../redux/result_reducer';

export default function Questions({onChecked}) {

    const [checked, setChecked] = useState(undefined);
    const { trace } = useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);
    const [{isLoading, apiData, serverError}] = useFetchQuestion();

    const questions = useSelector(
      (state) => state.questions.queue[state.questions.trace]
    );

    const dispatch = useDispatch();

    useEffect(() => {
        console.log({ trace, checked });
        dispatch(updateResultAction({ trace, checked }));
    }, [checked]);

    useEffect(() => {
        console.log(questions);
    });

    useEffect(() => {
        console.log(isLoading);
        console.log(apiData);
        console.log(serverError);
    })


    function onSelect(i) {
        onChecked(i);
        setChecked(i);
    }

    if (isLoading) {
        return (
            <h3 className='text-light'>isLoading</h3>
        )
    }

    if (serverError) {
      return <h3 className="text-light">{serverError || "Unknown Error."}</h3>;
    }

    return (
        <div className='questions'>
            <h2 className='text-light'>{questions?.question}</h2>
            <ul key={questions?.id}>
                {
                    questions?.options.map((q, i) => (
                        <li key={i}>
                            <input
                                type="radio"
                                value={true}
                                name="options"
                                id={`q${i}-option`}
                                onChange={() => onSelect(i)}
                            />
                            <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                            <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};