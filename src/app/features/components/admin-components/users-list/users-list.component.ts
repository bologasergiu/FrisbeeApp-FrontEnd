import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../../../core/services/admin.service";
import {MatDialog} from "@angular/material/dialog";
import {SnackBarComponent} from "../../snack-bar/snack-bar.component";
import {UserDetailsModel} from "../../../models/userDetailsModel";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {RoleMapping} from "../../../../core/enums/role";
import {DeleteuserDialogComponent} from "../../../../core/utils/deleteuser-dialog/deleteuser-dialog.component";
import {Guid} from "guid-typescript";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  dataSource= new MatTableDataSource<UserDetailsModel>([]);
  users : UserDetailsModel[];
  roleMapping = RoleMapping;


  @ViewChild(MatTable) table: MatTable<any>
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'team', 'role','birthDate','certified','approveAccount','delete'];
  constructor(private service: AdminService, private dialog: MatDialog, private snackBar: SnackBarComponent) { }

  ngOnInit() {
    this.service.getUsers().subscribe((data: UserDetailsModel[]) => {
      const unapprovedUsers = data.filter(user => !user.accountApproved);
      const approvedUsers = data.filter(user => user.accountApproved);
      this.dataSource = new MatTableDataSource<UserDetailsModel>(unapprovedUsers.concat(approvedUsers));
    }, error => {
      console.log(error);
    });
  }

  approveAccount(id: Guid) {
    this.service.approveAccount(id).subscribe(() => {
      this.snackBar.openSnackBar("User approved successfully.", '');
      this.ngOnInit();
    });
  }
  onDelete(email: string) {
    this.moveData();
    const dialogRef = this.dialog.open(DeleteuserDialogComponent,{
      data: {email: email}
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result.status != 'closed') {

          this.service.deleteUser(email).subscribe(() => {
            const index = this.users.findIndex(user => user.email === email);

            if (index !== -1) {
              this.snackBar.openSnackBar("User deleted successfully.", '');
              this.users.splice(index, 1);
              this.dataSource.data = this.users;
              this.table.renderRows();
            }
            else {
              this.snackBar.openSnackBar("Failed to delete user.", '');
            }
          });
        }
      }
    )
    this.refreshList();
  }
  moveData() {
    this.users = this.dataSource.data;
  }
  refreshList() {
    this.service.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
  isApproved(user: UserDetailsModel): boolean {
    return user.accountApproved;
  }

  isAdmin(role: string): boolean {
    return role === 'admin';
  }
}
