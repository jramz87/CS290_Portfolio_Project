// api.js - Place this in your src folder
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

// GET all exercises
export const fetchExercises = async () => {
    const response = await fetch(`${API_BASE_URL}/exercises`);
    const data = await response.json();
    return data;
};

// POST new exercise
export const createExercise = async (exercise) => {
    const response = await fetch(`${API_BASE_URL}/exercises`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(exercise),
    });
    
    if (response.status === 201) {
        
    } else {
        throw new Error(`Failed to add exercise, status code: ${response.status}`);
    }
};

// PUT update exercise
export const updateExercise = async (exercise, id) => {
    const response = await fetch(`${API_BASE_URL}/exercises/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(exercise),
    });

    if (response.status === 200) {
        return await response.json();
    } else {
        throw new Error(`Failed to update exercise, status code: ${response.status}`);
    }
};

// DELETE exercise
export const deleteExercise = async (id) => {
    const response = await fetch(`${API_BASE_URL}/exercises/${id}`, {
        method: 'DELETE',
    });
    
    if (response.status === 204) {
        return true;
    } else {
        throw new Error(`Failed to delete exercise with id: ${id}, status code: ${response.status}`);
    }
};