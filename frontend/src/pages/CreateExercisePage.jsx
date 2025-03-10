import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VscSave } from "react-icons/vsc";

export const CreateExercisePage = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');

    const addExercise = async () => {
        const newExercise = {
            name: name,
            reps: Number(reps), 
            weight: Number(weight), 
            unit: unit, 
            date: date};

        const response = await fetch(
            `/exercises`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newExercise)
                }
        );
        if (response.status === 201) {
            alert('Exercise added successfully');
        } else {
            alert(`Failed to add exercise, status code: ${response.status}`);
        };
        navigate('/');
    };

    return (
        <div className='modExercise'>
            <h2>New exercise details</h2>
            <label>
                Date Performed:
                <input
                    type="text"
                    placeholder="MM-DD-YY"
                    value={date}
                    onChange={e => setDate(e.target.value)} />
            </label>
            <br></br>
            <label>
                Name of Exercise:
                <input
                    type="text"
                    placeholder="Deadlifts"
                    value={name}
                    onChange={e => setName(e.target.value)} />
            </label>
            <br></br>
            <label>
                Number of Reps:
                <input
                    type="number"
                    placeholder="12"
                    value={reps}
                    onChange={e => setReps(e.target.valueAsNumber)} />
            </label>
            <br></br>
            <label>
                Weight Used:
                <input
                    type="number"
                    placeholder="135"
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
            <button onClick={addExercise}>
                <VscSave /> Save 
            </button>
        </div>
    );
};

export default CreateExercisePage;