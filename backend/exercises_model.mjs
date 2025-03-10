// Get the mongoose object
import mongoose from 'mongoose';
import 'dotenv/config';

const DB_NAME = 'exercise_db';
const COLLECTION = 'exercises';
const CLASS = 'Exercise';

let connection = undefined;
let Exercise = undefined;

/**
 * This function does the following:
 *  1. Connects to the MongoDB server.
 *  2. Drop users if asked to do so.
 *  3. Creates a user class for the movie schema.
 * @param {Boolean} dropCollection If true, drop users
 */
async function connect(dropCollection){
    try{
        await mongoose.connect(process.env.MONGODB_CONNECT_STRING, {dbName: DB_NAME});
        connection = mongoose.connection;
        console.log("Successfully connected to MongoDB using Mongoose!");
        if(dropCollection){ // if collection exists, it's dropped
            await connection.db.dropCollection(COLLECTION);
        };
        Exercise = createModel();
    } catch(err){
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`)
    };
};

/**
* This function defines the scheme for exercises in the MongoDB collection
*/
function createModel () {
    const exerciseSchema = mongoose.Schema({  
        name: {type: String, required: true},
        reps: {type: Number, required: true},
        weight: {type: Number, required: true},
        unit: {type: String, required: true},
        date: {type: String, required: true},
    });
    return mongoose.model(CLASS, exerciseSchema);
};

/**
* This function returns true if exercise data is valid and false if not
* @param {string} name
* @param {number} reps
* @param {number} weight
* @param {string} unit
* @param {string} date
*/
function validateData (name, reps, weight, unit, date) {
    if (name === undefined || reps === undefined || weight === undefined || unit === undefined || date === undefined) {
        console.log("something is undefined");
        return false;
    } else if (typeof(name) !== 'string' || name.length < 1) {
        console.log("name property is not valid");
        return false;
    } else if (Number.isInteger(reps) !== true || reps < 1) {
        console.log("reps property is not valid");
        return false;
    } else if (Number.isInteger(weight) !== true || weight < 1) {
        console.log("weight property is not valid");
        return false;
    } else if (typeof(unit) !== 'string' || !['kgs', 'lbs'].includes(unit)) {
        console.log("unit property is not valid");
        return false;
    } else if (typeof(date) !== 'string' || !isDateValid(date)) {
        console.log("date property is not valid");
        return false;
    }
    return true;
};

/**
* Return true if the date format is MM-DD-YY where MM, DD and YY are 2 digit integers
* @param {string} date
*/
function isDateValid(date) {
    // Test using a regular expression. 
    // To learn about regular expressions see Chapter 6 of the text book
    const format = /^\d\d-\d\d-\d\d$/;
    return format.test(date);
};

// 1) create exercise
async function createExercise (name, reps, weight, unit, date) {
    if (!validateData(name, reps, weight, unit, date)) {
        return false;
    }
    const exercise = new Exercise({name: name, reps: reps, weight: weight, unit: unit, date: date});
    await exercise.save();
    return exercise.toObject();
};

// 2) read all exercises
async function readExercises () {
    const query = Exercise.find({});
    return query.exec();
};

// 3) find one exercise by id
async function readExerciseById(id) {
    const query = Exercise.findById(id);
    return query.exec();
};

// 4) update one exercise by id
async function updateExercise(name, reps, weight, unit, date, id) {
    if (!validateData(name, reps, weight, unit, date)) {
        return false;
    }
    const replacement = {name: name, reps: reps, weight: weight, unit: unit, date: date};
    const result = await Exercise.replaceOne({_id: id}, replacement);

    if (result.matchedCount === 0) {
        return null
    }

    return await readExerciseById(id);
};

// 5) delete one exercise by id
async function deleteExercise (id) {
    const result = await Exercise.deleteOne({_id: id});
    return result.deletedCount;
};

export { connect, createExercise, readExercises, readExerciseById, updateExercise, deleteExercise };
