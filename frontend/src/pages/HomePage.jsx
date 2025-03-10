import { Link, useNavigate } from 'react-router-dom';
import ExerciseTable from '../components/ExerciseTable';
import { useEffect, useState } from 'react';
import { VscAdd } from "react-icons/vsc";
import { fetchExercises, deleteExercise } from '../api.js'; // Import the API functions

function HomePage({setExerciseToEdit}) {

    const [exercises, setExercises] = useState([]);

    // refresh exercise table when page initially renders (mounting stage)
    useEffect( () => {  
        loadExercises();
    }, []);

    const navigate = useNavigate();

    const loadExercises = async () => {
        try {
            const data = await fetchExercises();
            setExercises(data);
        } catch (error) {
            console.error('Error loading exercises:', error);
            alert('Failed to load exercises. Please try again later.');
        }
    };

    const onDelete = async (_id) => {
        try {
            const success = await deleteExercise(_id);
            if (success) {
                setExercises(exercises.filter(e => e._id !== _id));
            }
        } catch (error) {
            console.error('Error deleting exercise:', error);
            alert(`Failed to delete exercise with id: ${_id}`);
        }
    };

    const onEdit = (exercise) => {
        setExerciseToEdit(exercise);
        navigate('/edit-exercise');
    };

    return (
        <>
            <h2>Your History:</h2>
            <ExerciseTable exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseTable>
            <br></br>
            <Link className="VscButton" to="/create-exercise">
                <VscAdd className="VscButton"/> Add a new exercise
            </Link>
        </>
    );
};

export default HomePage;