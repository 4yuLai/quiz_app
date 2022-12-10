import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Custom hook
import { useFetchQuestion } from "../hooks/fetchQuestion";
import { updateResultAction } from "../redux/result_reducer";

const Questions = ({ onChecked }) => {
    // Keep track of the selected answer
    const [checked, setChecked] = useState(undefined);

    // Get the current trace and result from the Redux store
    const { trace } = useSelector((state) => state.questions);
    const result = useSelector((state) => state.result.result);

    // Use the custom hook to fetch the data for the current question
    const [{ isLoading, apiData, serverError }] = useFetchQuestion();

    // Get the current state from the Redux store
    const state = useSelector((state) => state);

    // Get the current question from the Redux store
    const questions = useSelector(
        (state) => state.questions.queue[state.questions.trace]
    );

    // Get the dispatch function to dispatch Redux actions
    const dispatch = useDispatch();

    // Update the result in the Redux store when the selected answer changes
    useEffect(() => {
        dispatch(updateResultAction({ trace, checked }));
    }, [checked]);

    // Handle the user selecting an answer
    function onSelect(i) {
        onChecked(i);
        setChecked(i);
    }

    // If the data is still being fetched, show a loading message
    if (isLoading) {
        return <h3 className="text-light">isLoading</h3>;
    }

    // If there was an error fetching the data, show an error message
    if (serverError) {
        return <h3 className="text-light">{serverError || "Unknown Error."}</h3>;
    }

    // If the data was successfully fetched, render the question and options
    return (
        <div className="questions">
            <h2 className="text-light">{questions?.question}</h2>
            <ul key={questions?.id}>
                {questions?.options.map((q, i) => (
                    <li key={i}>
                        {/* Radio button for the option */}
                        <input
                            type="radio"
                            value={true}
                            name="options"
                            id={`q${i}-option`}
                            onChange={() => onSelect(i)}
                        />

                        {/* Label for the option */}
                        <label className="text-primary" htmlFor={`q${i}-option`}>
                            {q}
                        </label>

                        {/* Styling to show if the option was selected */}
                        <div
                            className={`check ${result[trace] == i ? "checked" : ""}`}
                        ></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Questions;
