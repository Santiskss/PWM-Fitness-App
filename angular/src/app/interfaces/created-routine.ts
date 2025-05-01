import {UsedExercise} from './used-exercise';

export interface CreatedRoutine {
  id?: string;
  name: string;
  description: string;
  duration: string;
  exercises: UsedExercise[];
}
