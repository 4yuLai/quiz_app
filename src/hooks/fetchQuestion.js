import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import data, {answers} from "../database/data";
import * as Action from "../redux/question_reducer"

export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({
        isLoading: false,
        apiData: [],
        serverError: null
    });

    useEffect(() => {
        setGetData((prev) => ({
            ...prev,
            isLoading: true,
        }));
        /* Async function to fetch data */
        (async () => {
            try {
            let question = await data;
            if (question.length > 0) {
                setGetData((prev) => ({
                ...prev,
                isLoading: false,
                apiData: {question, answers}
                }));
                dispatch(Action.startExamAction({ question, answers }));
            } else {
                throw new Error('No question available.');
            }
            } catch (error) {
            setGetData((prev) => ({
                ...prev,
                isLoading: false,
                serverError: error,
            }));
            }
        })();
        }, [dispatch]);
    return [getData, setGetData];
} 