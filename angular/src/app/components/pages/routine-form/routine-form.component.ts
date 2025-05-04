import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {Observable, switchMap} from 'rxjs';
import {CreateRoutineService} from '../../../services/create-routine.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ExerciseService} from '../../../services/exercise-service.service';
import {HeaderComponent} from '../../header/header.component';
import {FooterComponent} from '../../footer/footer.component';
import {Exercise} from '../../../interfaces/exercise';
import {Routine} from '../../../interfaces/routine';

@Component({
  selector: 'app-routine-form',
  imports: [
    ReactiveFormsModule,
    NgForOf,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './routine-form.component.html',
  styleUrl: './routine-form.component.css'
})
export class RoutineFormComponent implements OnInit {
  form!: FormGroup;
  groups: string[] = [];
  exerciseOptions: Exercise[] = [];
  isEdit = false;
  private editId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private crs: CreateRoutineService,
    private es: ExerciseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name:        ['', Validators.required],
      description: [''],
      duration:    ['', Validators.required],
      bodyPart:    ['', Validators.required],
      exercises:   this.fb.array([])
    });

    this.es.listGroups().subscribe(gs => this.groups = gs);

    this.route.paramMap.pipe(
      switchMap(params => {
        this.editId = params.get('id');
        if (this.editId) {
          this.isEdit = true;
          return this.crs.getRoutine(this.editId);
        }
        return [null];
      })
    ).subscribe(r => {
      if (r) this.patchForm(r);
    });
  }

  get exercisesArr(): FormArray {
    return this.form.get('exercises') as FormArray;
  }

  onGroupChange() {
    const gp = this.form.value.bodyPart;
    this.es.listByGroup(gp).subscribe(exs => {
      this.exerciseOptions = exs;
    });
  }

  addExercise(exId: string) {
    const ex = this.exerciseOptions.find(e => e.id === exId);
    if (!ex) return;
    this.exercisesArr.push(this.fb.group({
      id:   [ex.id],
      name: [ex.name],
      reps: ['5x15']
    }));
  }

  removeExercise(i: number) {
    this.exercisesArr.removeAt(i);
  }

  private patchForm(r: Routine) {
    this.form.patchValue({
      name:     r.name,
      description: r.description,
      duration: r.duration,
      bodyPart: r.exercises[0]?.id
    });

    this.exercisesArr.clear();

    r.exercises.forEach(ex => {
      this.exercisesArr.push(this.fb.group({
        id:   [ex.id],
        name: [ex.name],
        reps: [ex.reps]
      }));
    });
  }

  async save() {
    const v = this.form.value;
    const payload: Routine = {
      name:        v.name,
      description: v.description,
      duration:    v.duration,
      exercises:   v.exercises
    };

    if (this.isEdit && this.editId) {
      await this.crs.updateRoutine(this.editId, payload);
    } else {
      await this.crs.addRoutine(payload);
    }
    this.router.navigate(['routineList']);
  }
}
