import {Component, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {TimeOffRequestDTO} from "src/app/features/components/dto/timeOffRequestDTO";
import {MatDialog} from "@angular/material/dialog";
import {SnackBarComponent} from "../../snack-bar/snack-bar.component";
import {CoachService} from "../../../../core/services/coach.service";
import {TypeMapping} from "../../../../core/enums/requestType";
import {RequestStatus, StatusMapping} from "../../../../core/enums/requestStatus";
import {Sort} from "@angular/material/sort";

@Component({
  selector: 'app-time-off-request-list',
  templateUrl: './time-off-request-list.component.html',
  styleUrls: ['./time-off-request-list.component.css']
})
export class TimeOffRequestListComponent {
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
  displayedColumns: string[] = ['index', 'userName', 'userEmail', 'startDate', 'endDate', 'requestType', 'status'];

  constructor(private service: CoachService, private dialog: MatDialog, private snackBar: SnackBarComponent) { }

  ngOnInit() {
    this.service.getTimeOffRequests().subscribe((data: TimeOffRequestDTO[]) => {
      this.timeOffRequests = data;
      this.filteredRequests = [...this.timeOffRequests]; // Initialize filtered requests with all requests
      this.totalPages = Math.ceil(this.filteredRequests.length / this.pageSize); // Calculate total pages
      this.updateDataSource(); // Update the data source with pagination
      this.sortData({ active: 'startDate', direction: 'desc' }); // Sort the data by start date
    }, error => {
      console.log(error);
    });
  }



  applyFilter() {
    const filterValue = this.searchText.trim().toLowerCase();
    this.dataSource.filterPredicate = (data: TimeOffRequestDTO, filter: string) =>
      data.userName.toLowerCase().includes(filter) ||
      this.requestStatusMapping[data.status].toLowerCase().includes(filter);

    this.dataSource.filter = filterValue;

    this.filteredRequests = this.timeOffRequests.filter((request: TimeOffRequestDTO) => {
      return (
        request.userName.toLowerCase().includes(filterValue) ||
        this.requestStatusMapping[request.status].toLowerCase().includes(filterValue)
      );
    });

    this.totalPages = Math.ceil(this.filteredRequests.length / this.pageSize);

    this.currentPage = 0;

    this.updateDataSource();
  }


  editStatus() {
    this.isEditMode = true;
  }

  cancel() {
    this.isEditMode = false;
    this.currentPage = Math.floor(this.filteredRequests.indexOf(this.dataSource.data[0]) / this.pageSize);
    this.updateDataSource();
  }


  changeStatus(request: any, status: string) {
    this.service.changeStatus(request.id, status)
      .subscribe(response => {
        this.snackBar.openSnackBar("Statuses of the request were changed successfully", '');
        this.ngOnInit();
      });
  }

  checkStatus(){

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


}
