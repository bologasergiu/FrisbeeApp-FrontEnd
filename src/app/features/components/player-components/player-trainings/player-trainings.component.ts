  import {Component, OnInit} from '@angular/core';
  import {MatDialog} from "@angular/material/dialog";
  import {SnackBarComponent} from "../../snack-bar/snack-bar.component";
  import {TrainingModel} from "../../../models/trainingModel";
  import {PlayerService} from "../../../../core/services/player.service";

  @Component({
    selector: 'app-player-trainings',
    templateUrl: './player-trainings.component.html',
    styleUrls: ['./player-trainings.component.css']
  })
  export class PlayerTrainingsComponent implements OnInit{

    trainings: TrainingModel[];
    constructor(private service: PlayerService, private dialog: MatDialog, private snackBar: SnackBarComponent) { }

    ngOnInit() {
      this.service.getTrainings().subscribe((data: TrainingModel[]) => {
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        this.trainings = data.filter(training => new Date(training.date) >= oneMonthAgo);
      });
    }
    uniqueTeams(trainings: TrainingModel[]): string[] {
      const teams = trainings.map(training => training.team);
      return [...new Set(teams)];
    }

    trainingsByTeam(trainings: TrainingModel[], team: string): TrainingModel[] {
      return trainings.filter(training => training.team === team);
    }
  }
