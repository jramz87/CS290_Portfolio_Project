import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VscSave } from "react-icons/vsc";

export const EditExercisePage = ({exerciseToEdit}) => {

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const navigate = useNavigate();

    const editExercise = async () => {
        const editedExercise = {
            name: name,
            reps: Number(reps), 
            weight: Number(weight), 
            unit: unit, 
            date: date};

        const response = await fetch(
            `/exercises/${exerciseToEdit._id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(editedExercise)
                }
        );
        if (response.status === 200) {
            alert('Exercise edited successfully');
        } else {
            alert(`Failed to edit exercise, status code: ${response.status}`);
        };
        navigate('/');
    };

    return (
        <div className='modExercise'>
            <h2>Edit exercise entry</h2>
            <label>
                Date Performed:
                <input
                    type="text"
                    value={date}
                    onChange={e => setDate(e.target.value)} />
            </label>
            <br></br>
            <label>
                Name of Exercise:
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)} />
            </label>
            <br></br>
            <label>
                Number of Reps:
                <input
                    type="number"
                    value={reps}
                    onChange={e => setReps(e.target.valueAsNumber)} />
            </label>
            <br></br>
            <label>
                Weight Used:
                <input
                    type="number"
                    value={weight}
                    onChange={e => setWeight(e.target.valueAsNumber)} />
            </label>
            <br></br>
            <label>
                Weight units:
                <select value={unit} onChange={e => setUnit(e.target.value)}>
                    <option value='lbs'>lbs</option>
                    <option value='kgs'>kgs</option>
                </select>
            </label>
            <br></br>
            <br></br>
            <button onClick={editExercise}>
                <VscSave /> Save 
            </button>
        </div>
    );
};

export default EditExercisePage;