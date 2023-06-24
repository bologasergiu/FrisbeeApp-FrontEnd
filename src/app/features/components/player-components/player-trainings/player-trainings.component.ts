import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SnackBarComponent } from '../../snack-bar/snack-bar.component';
import { TrainingModel } from '../../../models/trainingModel';
import { PlayerService } from '../../../../core/services/player.service';
import { Fields, FieldsMapping } from '../../../../core/enums/fields';
import {MatTableDataSource} from "@angular/material/table";
import {TeamModel} from "../../../models/teamModel";

@Component({
  selector: 'app-player-trainings',
  templateUrl: './player-trainings.component.html',
  styleUrls: ['./player-trainings.component.css'],
})
export class PlayerTrainingsComponent implements OnInit {
  fields: Fields[] = Object.values(Fields).filter(
    (value) => typeof value === 'number'
  ) as Fields[];
  dataSource = new MatTableDataSource<TrainingModel>([]);
  displayedColumns: string[] = ['index', 'date', 'duration', 'field', 'coachName'];
  trainingModel: TrainingModel[] = [];
  constructor(
    private service: PlayerService,
    private dialog: MatDialog,
    private snackBar: SnackBarComponent
  ) {}

  ngOnInit() {
    this.service.getTrainings().subscribe((data: TrainingModel[]) => {
      this.dataSource.data = data;
    }, error => {
      console.log(error);
    });
  }
}
