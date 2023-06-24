import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Fields, FieldsMapping } from "../../../../core/enums/fields";
import { TrainingModel } from "../../../models/trainingModel";
import { CoachService } from "../../../../core/services/coach.service";
import { SnackBarComponent } from "../../snack-bar/snack-bar.component";

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent {
  trainingForm: FormGroup;
  fields: Fields[] = Object.values(Fields).filter(value => typeof value === 'number') as Fields[];
  fieldsMapping = FieldsMapping;
  trainingModel: TrainingModel = new TrainingModel();
  filteredFields: Fields[] = []; // Array to store filtered fields

  constructor(private coachService: CoachService, private snackBar: SnackBarComponent) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.trainingForm = new FormGroup({
      'date': new FormControl(null, Validators.required),
      'field': new FormControl(null, Validators.required),
      'duration': new FormControl(null, Validators.required)
    });

    this.trainingForm.controls['field'].valueChanges.subscribe(value => {
      this.filteredFields = this.fields.filter(option =>
        this.fieldsMapping[option].toLowerCase().includes(value.toLowerCase())
      );
    });
  }

  onSubmit() {
    this.trainingModel = this.trainingForm.value;
    this.coachService.addTraining(this.trainingModel).subscribe((response: any) => {
      if (response == true) {
        this.snackBar.openSnackBar('Training added successfully', '');
      } else {
        this.snackBar.openSnackBar('Failed', '');
      }
    });
  }
}
