import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../../core/services/admin.service";
import {SnackBarComponent} from "../../snack-bar/snack-bar.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit, OnDestroy{
  addTeamForm: FormGroup
  teamName: string

  constructor(private adminService : AdminService, private snackbar: SnackBarComponent, private router: Router ) {
  }
  ngOnInit() {
    this.initForm()
  }
  initForm(){
    this.addTeamForm = new FormGroup({
      'teamName': new FormControl(null, [Validators.required]),
    });
  }
  onSubmit(){
    this.teamName = this.addTeamForm.value.teamName;
    this.adminService.addNewTeam(this.teamName).subscribe((response: any) => {
      if (response != null) {
        this.snackbar.openSnackBar("Team added successfully", '');
      }
      else {
        this.snackbar.openSnackBar("Team was not added",'');
      }
    });
    this.addTeamForm.reset();
  }

  ngOnDestroy() {
    this.addTeamForm.controls['teamName'].markAsUntouched();
  }

}
