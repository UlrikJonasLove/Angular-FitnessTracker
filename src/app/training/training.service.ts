import { Subject } from "rxjs";
import { Exercice } from "./exercise.model";


export class TrainingService {
    exerciseChanged = new Subject<Exercice>();
    private availableExercises: Exercice[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8},
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15},
        { id: 'side-lunges', name: 'Sige Lunges', duration: 120, calories: 18},
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8}
    ];

    private runningExercise?: Exercice;
    private exercises: Exercice[] = [];

    getAvailableExercises() {
        return this.availableExercises.slice() // returning a copy
    }

    startExercise(selectedId: string) {
        this.runningExercise = this.availableExercises.find(ex => ex.id == selectedId);
        this.exerciseChanged.next({ ...this.runningExercise }); // next function emits the subject event
    }

    completeExercise() {
        this.exercises.push({
            ...this.runningExercise, 
            date: new Date(), 
            state: "completed"});
        this.runningExercise = null;
        this.exerciseChanged.next(null); // sets the exercise to null
    }

    cancelExercise(progress: number) {
        this.exercises.push({
            ...this.runningExercise, 
            duration: this.runningExercise.duration * (progress / 100),
            calories: this.runningExercise.calories * (progress / 100),
            date: new Date(), 
            state: "cancelled"});
        this.runningExercise = null;
        this.exerciseChanged.next(null); // sets the exercise to null
    }

    getRunningExercise() {
        return {...this.runningExercise};
    }

    getCompletedOrCancelledExercises() {
        return this.exercises.slice()
    }
}