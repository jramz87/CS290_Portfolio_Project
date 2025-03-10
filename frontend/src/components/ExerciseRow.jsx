import '../App.css';
import { VscEdit, VscTrash } from "react-icons/vsc";

function ExerciseRow({exercise, onDelete, onEdit}) {
    
    return (  
        <tr className="collection-item">
            <td className='dateInTable'>{exercise.date}</td>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>
                <VscEdit className="VscButton" onClick={e => onEdit(exercise)}/>
                <VscTrash className="VscButton" onClick={e => onDelete(exercise._id)}/>
            </td>
        </tr>
    );
};

export default ExerciseRow;

