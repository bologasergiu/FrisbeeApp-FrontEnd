import { Component } from '@angular/core';
import {AuthenticationService} from "../../../core/services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-data-page',
  templateUrl: 'view-data-page.component.html',
  styleUrls: ['./view-data-page.component.css']
})
export class ViewDataPageComponent {

  constructor(private authService: AuthenticationService, private router: Router) {
  }


}
