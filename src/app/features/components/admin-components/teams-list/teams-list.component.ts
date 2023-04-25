import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../../core/services/admin.service";
import {TeamModel} from "../../../models/teamModel";

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {
  teams: TeamModel[];
  constructor(private service: AdminService) { }

  ngOnInit() {
    this.service.getTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }
  deleteTeam(name: string) {
    console.log(name)
    this.service.deleteTeam(name).subscribe(() => {
      const index = this.teams.findIndex(team => team.teamName === name);
      console.log(index)
      if (index !== -1) {
        this.teams.splice(index, 1);
      }
    });
  }
}
