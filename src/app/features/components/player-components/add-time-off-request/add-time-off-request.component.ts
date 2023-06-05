import {Component, OnInit} from '@angular/core';
import {RequestType, TypeMapping} from "../../../../core/enums/requestType";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TimeOffRequestModel} from "../../../models/timeOffRequestModel";
import {PlayerService} from "../../../../core/services/player.service";
import {SnackBarComponent} from "../../snack-bar/snack-bar.component";

@Component({
  selector: 'app-add-time-off-request',
  templateUrl: './add-time-off-request.component.html',
  styleUrls: ['./add-time-off-request.component.css']
})
export class AddTimeOffRequestComponent implements OnInit{
  registerRequestForm: FormGroup;
  requestTypes = Object.values(RequestType).filter(value => typeof value === 'number');
  requestMapping = TypeMapping;
  requestModel : TimeOffRequestModel = new TimeOffRequestModel();

  constructor(private userService: PlayerService, private snackBar: SnackBarComponent) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.registerRequest();
  }

  registerRequest(){
    this.registerRequestForm = new FormGroup({
      'startDate': new FormControl(null,Validators.required),
      'endDate': new FormControl(null,[Validators.required]),
      'requestType': new FormControl(null, [Validators.required])
    });
  }


  onSubmit() {
    this.requestModel = this.registerRequestForm.value;
    this.userService.registerRequest(this.requestModel).subscribe((response: any) => {
      if (response == true) {
        this.snackBar.openSnackBar('Request added successfully','');
      }
      else {
        this.snackBar.openSnackBar('Failed', '')
      }
    });
  }
}
