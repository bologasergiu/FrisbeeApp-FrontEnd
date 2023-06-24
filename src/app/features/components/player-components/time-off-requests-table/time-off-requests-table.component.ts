import {Component, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {TimeOffRequestDTO} from "../../dto/timeOffRequestDTO";
import {TypeMapping} from "../../../../core/enums/requestType";
import {RequestStatus, StatusMapping} from "../../../../core/enums/requestStatus";
import {CoachService} from "../../../../core/services/coach.service";
import {MatDialog} from "@angular/material/dialog";
import {SnackBarComponent} from "../../snack-bar/snack-bar.component";
import {Sort} from "@angular/material/sort";
import {TimeOffRequestModel} from "../../../models/timeOffRequestModel";
import {PlayerService} from "../../../../core/services/player.service";
import {Guid} from "guid-typescript";

@Component({
  selector: 'app-time-off-requests-table',
  templateUrl: './time-off-requests-table.component.html',
  styleUrls: ['./time-off-requests-table.component.css']
})
export class TimeOffRequestsTableComponent {
  dataSource = new MatTableDataSource<TimeOffRequestDTO>([]);
  timeOffRequests: TimeOffRequestDTO[];
  requestTypeMapping = TypeMapping;
  requestStatusMapping = StatusMapping;
  searchText = '';
  editAvailableStatuses = [RequestStatus.Approved, RequestStatus.Rejected];
  isEditMode: boolean = false;
  filteredRequests: TimeOffRequestDTO[];


  currentPage = 0;
  pageSize = 10;
  totalPages: number;

  pendingStatus = true;

  @ViewChild(MatTable) table: MatTable<any>;
  displayedColumns: string[] = ['index', 'userName','requestType','startDate', 'endDate', 'status','delete'];

  constructor(private playerService: PlayerService, private dialog: MatDialog, private snackBar: SnackBarComponent) { }

  ngOnInit() {
    this.playerService.getMyTimeOffRequests().subscribe((data: TimeOffRequestDTO[]) => {
      this.timeOffRequests = data;
      this.filteredRequests = [...this.timeOffRequests]; // Initialize filtered requests with all requests
      this.totalPages = Math.ceil(this.filteredRequests.length / this.pageSize); // Calculate total pages
      this.updateDataSource(); // Update the data source with pagination
      this.sortData({ active: 'startDate', direction: 'desc' }); // Sort the data by start date
    }, error => {
      console.log(error);
    });
  }

  sortData(sort: Sort) {
    const data = this.dataSource.data.slice(); // Make a copy of the data array
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }

    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'startDate':
          return this.compareDates(a.startDate, b.startDate, isAsc);
        default:
          return 0;
      }
    });
  }

  compareDates(a: Date, b: Date, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  updateDataSource() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    const data = this.filteredRequests.slice(startIndex, endIndex);
    this.dataSource.data = data;
  }



  goToPreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateDataSource();
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updateDataSource();
    }
  }
  deleteRequest(requestId: Guid) {
    this.playerService.deleteTimeOffRequest(requestId).subscribe(() => {
      this.snackBar.openSnackBar('Request deleted successfully', 'Close');
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }
}
