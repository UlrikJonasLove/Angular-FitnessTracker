import { Exercice } from "./exercise.model";

export class TrainingService {
    private availableExercises: Exercice[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8},
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15},
        { id: 'side-lunges', name: 'Sige Lunges', duration: 120, calories: 18},
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8}
    ];

    getAvailableExercises() {
        return this.availableExercises.slice() // returning a copy
    }
}