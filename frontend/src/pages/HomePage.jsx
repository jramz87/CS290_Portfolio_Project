import { Link, useNavigate } from 'react-router-dom';
import ExerciseTable from '../components/ExerciseTable';
import { useEffect, useState } from 'react';
import { VscAdd } from "react-icons/vsc";

function HomePage({setExerciseToEdit}) {

    const [exercises, setExercises] = useState([]);

    // refresh exercise table when page initially renders (mounting stage)
    useEffect( () => {  
        loadExercises();
    }, []);

    const navigate = useNavigate();

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    };

    const onDelete = async (_id) => {
        const response = await fetch(
            `/exercises/${_id}`,
            {method: 'DELETE'}
        );
        if (response.status === 204) {
            setExercises(exercises.filter(e => e._id !== _id))
        } else {
            alert(`Failed to delete exercise with id: ${_id}, status code: ${response.status}`);
        };
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