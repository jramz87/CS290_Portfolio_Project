import 'dotenv/config';
import * as exercisesModel from './exercises_model.mjs';
import express from 'express';
import asyncHandler from 'express-async-handler';

const PORT = process.env.PORT;
const ERROR_NOT_FOUND = {Error: 'Not found'}

const app = express();
app.use(express.json());

app.listen(PORT, async () => {
    await exercisesModel.connect(false)
    console.log(`Server listening on port: ${PORT}...`)
});

/**
 * 1) Create a new exercise with the name, reps, weight, 
 * unit and date provided in the body.
 */
app.post('/exercises', asyncHandler(async (req, res) => {
    const exercise = await exercisesModel.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date);
    res.set('Content-type','application/json')
    if (exercise === false) {
        res.status(400).json({ Error: "Invalid request"})
    } else {
        res.status(201).json(exercise)
    }
}));

/**
 * 2) Retrieve all exercises. 
 */
app.get('/exercises', asyncHandler(async (req, res) => {
    const exercisesAll = await exercisesModel.readExercises();
    res.set('Content-type','application/json').status(200).json(exercisesAll);
}));


/**
 * 3) Retrieve the exercise corresponding to the ID provided in the URL.
 */
app.get('/exercises/:_id', asyncHandler(async (req, res) => {
    const exercise = await exercisesModel.readExerciseById(req.params._id);
    res.set('Content-type','application/json')
    if (exercise !== null) {
        res.status(200).json(exercise);
    } else {
        res.status(404).json({ Error: "Not found"});
    }
}));

/**
 * 4) Update the exercise whose id is provided in the path parameter and set 
 * its name, reps, weight, unit and date to the values provided in the body.
 */
app.put('/exercises/:_id', asyncHandler(async (req, res) => {
    const result = await exercisesModel.updateExercise(
            req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date, req.params._id)
    res.set('Content-type','application/json')
    if (result === false) {
        res.status(400).json({ Error: "Invalid request"});
    } else if (result === null) {
        res.status(404).json({ Error: "Not found"});
    } else {
        res.status(200).json(result)
    }
}));

/**
 * 5) Delete the exercise whose id is provided in the query parameters
 */
app.delete('/exercises/:_id', asyncHandler(async (req, res) => {
    const deletedCount = await exercisesModel.deleteExercise(req.params._id);
    if (deletedCount === 1) {
        res.status(204).send();
    } else {
        res.set('Content-type','application/json').status(404).json({ Error: "Not found"});
    }
}));


