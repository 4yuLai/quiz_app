import { createSlice } from "@reduxjs/toolkit";

/** create reducer */
export const questionReducer = createSlice({
    name: 'questions',
    initialState : {
        queue: [],
        answers : [],
        trace : 0
    },
    reducers : {
        startExamAction : (state, action) => {
            let { question, answers} = action.payload
            return {
                ...state,
                queue : question,
                answers
            }
        }
    }
})

export const { startExamAction } = questionReducer.actions;

export default questionReducer.reducer;