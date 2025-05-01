import {Exercise} from './exercise';

export enum RoutineType {
  CORE        = 'routines_core',
  FULL_BODY   = 'routines_full_body',
  LEGS        = 'routines_legs',
  PULL        = 'routines_pull',
  PUSH        = 'routines_push'
}

export interface Routine {
  id: string;
  tipo: RoutineType;
  name: string;
  description: string;
  duration: string;
  exercises: Exercise[];
}
