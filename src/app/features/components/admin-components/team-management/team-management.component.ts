import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.css']
})
export class TeamManagementComponent {
  constructor(private router: Router) { }
  addTeam(){
    this.router.navigate(['/teams-management/add-team']);
  }
}
