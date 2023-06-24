import { Component, OnInit } from '@angular/core';
import { CoachService } from "../../../../core/services/coach.service";
import { MatTableDataSource } from "@angular/material/table";
import { TrainingModel } from "../../../models/trainingModel";
import { TeamModel } from "../../../models/teamModel";
import { AdminService } from "../../../../core/services/admin.service";

@Component({
  selector: 'app-trainings-table',
  templateUrl: './trainings-table.component.html',
  styleUrls: ['./trainings-table.component.css']
})
export class TrainingsTableComponent implements OnInit {
  dataSource = new MatTableDataSource<TrainingModel>([]);
  trainingModel: TrainingModel[] = [];
  filteredTrainings: TrainingModel[] = [];
  selectedTeam: string;
  currentPage = 0;
  pageSize = 10;
  totalPages: number;
  displayedColumns: string[] = ['index', 'date', 'duration', 'field', 'team', 'coachName'];
  teamModel: TeamModel[] = [];

  constructor(private coachService: CoachService) { }

  ngOnInit() {
    this.loadTeams();
    this.coachService.getTrainings().subscribe((data: TrainingModel[]) => {
      this.trainingModel = data;
      this.filteredTrainings = [...this.trainingModel];
      this.totalPages = Math.ceil(this.filteredTrainings.length / this.pageSize);
      this.updateDataSource();
    }, error => {
      console.log(error);
    });
  }

  loadTeams(): void {
    this.coachService.getTeams().subscribe(
      (data: TeamModel[]) => {
        this.teamModel = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSelect() {
    if (this.selectedTeam) {
      this.filteredTrainings = this.trainingModel.filter(training => training.team === this.selectedTeam);
    } else {
      this.filteredTrainings = [...this.trainingModel];
    }

    this.currentPage = 0; // Reset current page to the first page
    this.totalPages = Math.ceil(this.filteredTrainings.length / this.pageSize); // Recalculate total pages
    this.updateDataSource(); // Update the data source with pagination
  }

  updateDataSource(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    const data = this.filteredTrainings.slice(startIndex, endIndex);
    this.dataSource.data = data;
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.filteredTrainings.length / this.pageSize);
  }

  goToPreviousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateDataSource();
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updateDataSource();
    }
  }
}
