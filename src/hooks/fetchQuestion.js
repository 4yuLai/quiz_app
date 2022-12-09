import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Questions from "../components/Questions";
import { getServerData } from "../helper/helper";
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
                const q = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,(data) => data)
                const [{ questions, answers}] = q.q;
                console.log({ questions, answers });


                if (questions.length > 0) {
                setGetData((prev) => ({
                ...prev,
                isLoading: false,
                apiData: {questions, answers}
                }));
                dispatch(Action.startExamAction({ question: questions, answers }));
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