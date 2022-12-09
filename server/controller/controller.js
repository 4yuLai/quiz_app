import Questions from "../models/questionSchema.js";
import Result from "../models/resultSchema.js";
import questions, {answers} from '../database/data.js'


// get questions
export async function getQuestions(req, res) {
    try {
        const q = await Questions.find();
        res.json({ q })
    } catch (error) {
        res.json({ error })
    }
}

// insert questions
export async function insertQuestions(req, res) {
    try {
        Questions.insertMany({ questions, answers }, function (err, data) {
            res.json({msg: "insert data successfully."})
        })
    } catch (error) {
        res.json({ error })
    }
}

// delete questions
export async function dropQuestions(req, res) {
    try {
        await Questions.deleteMany()
        res.json({ msg: "Questions deleted successfully." })
    } catch (error) {
        res.json({ error })
    }
}

// get result
export async function getResult(req, res) {
    try {
        const r = await Result.find()
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

// store result
export async function storeResult(req, res) {
    try {
        const { username, result, attempts, points, achived } = req.body;
        if (!username && !result) {
            throw new Error('No data provided.');
        }
        else { 
            Result.create({ username, result, attempts, points, achived }, function (err, data) {
                res.json({msg: 'Result saved successfully'})
            })
        }
        
    } catch (error) {
        res.json({ error })
    }
}

// delete result
export async function dropResult(req, res) {
    try {
        await Result.deleteMany();
        res.json({ msg: "Results deleted successfully." })
    } catch (error) {
        res.json({ error })
    }
}