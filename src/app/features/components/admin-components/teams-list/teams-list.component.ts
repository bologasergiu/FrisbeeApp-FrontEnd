import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../../../core/services/admin.service";
import {TeamModel} from "../../../../models/teamModel";
import {MatDialog} from "@angular/material/dialog";
import {SnackBarComponent} from "../../../snack-bar/snack-bar.component";
import {ConfirmationDialogComponent} from "../../../../../core/utils/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {
  teams: TeamModel[];
  constructor(private service: AdminService, private dialog: MatDialog, private snackBar: SnackBarComponent) { }

  ngOnInit() {
    this.service.getTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }
  deleteTeam(name: string) {

    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data: {teamName: name}
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result.status != 'closed') {

          this.service.deleteTeam(name).subscribe(() => {
            const index = this.teams.findIndex(team => team.teamName === name);
            if (index !== -1) {
              this.snackBar.openSnackBar("Team deleted successfully.", '');
              this.teams.splice(index, 1);
            }
            else {
              this.snackBar.openSnackBar("Failed to delete team.", '');
            }
          });
        }
      }
    )
  }
  refreshList() {
    this.service.getTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }
}
