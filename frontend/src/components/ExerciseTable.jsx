import ExerciseRow from './ExerciseRow';
import '../App.css';

function ExerciseTable({exercises, onDelete, onEdit}) {
    
    return (  
        <table className="collection-container">
            <thead>
                <tr>
                    <th className='dateInTable'>Date</th>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Modify</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, index) => <ExerciseRow exercise={exercise} 
                    key={index} onDelete={onDelete} onEdit={onEdit}></ExerciseRow>)}
            </tbody>
        </table>
    );
};

export default ExerciseTable;
