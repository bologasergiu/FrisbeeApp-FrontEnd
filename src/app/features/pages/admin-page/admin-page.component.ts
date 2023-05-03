import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../core/services/admin.service";
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  teamManagement = false;
  constructor(private service: AdminService) { }
  ngOnInit() {
  };



}
