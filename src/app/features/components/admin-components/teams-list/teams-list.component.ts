import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../../core/services/admin.service";
import {TeamModel} from "../../../models/teamModel";
import {MatDialog} from "@angular/material/dialog";
import {SnackBarComponent} from "../../snack-bar/snack-bar.component";
import {ConfirmationDialogComponent} from "../../../../core/utils/confirmation-dialog/confirmation-dialog.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {
  isCollapsed: boolean = true;
  teams: TeamModel[];
  selectedTeam: any;
  teamMembers: any[];
  numberOfPlayers: Observable<number>;

  constructor(private adminService: AdminService, private dialog: MatDialog, private snackBar: SnackBarComponent) { }

  onTeamSelected(teamName: string) {
    this.selectedTeam= teamName;
    this.adminService.getTeamMembers(teamName).subscribe((members: any[]) => {
      this.teamMembers = members;
      this.isCollapsed = false;
    });
  }

  ngOnInit() {
    this.adminService.getTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }
  deleteTeam(name: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data: {teamName: name}
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result.status != 'closed') {

          this.adminService.deleteTeam(name).subscribe(() => {
            const index = this.teams.findIndex(team => team.teamName === name);
            if (index !== -1) {
              this.snackBar.openSnackBar("Team deleted successfully.", '');
              this.teams.splice(index, 1);
              this.refreshList();
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
    this.adminService.getTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }

  checkTeam(teamName: string){
    if(teamName === this.selectedTeam){
      return true;
    }
    else{
      return false;
    }
  }

  toggleTeamMembers(){
    this.isCollapsed = !this.isCollapsed;
  }

  getNumberOfPlayers(teamName: string){
    this.numberOfPlayers = this.adminService.getNumberOfPlayers(teamName);
    return this.numberOfPlayers;
  }
}
