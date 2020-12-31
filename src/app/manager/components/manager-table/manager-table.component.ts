import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { noop } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from '../../interfaces/IUser';
import { UsersService } from '../../services/user.service';
@Component({
  selector: 'app-manager-table',
  templateUrl: './manager-table.component.html',
  styleUrls: ['./manager-table.component.scss']
})
export class ManagerTableComponent implements OnInit, AfterViewInit {
  @ViewChild("USERSTABLE", { static: false, read: MatTable }) table: MatTable<IUser>;

  dataSource: IUser[] = []

  displayedColumns: string[] = ['select','user', 'email', 'created_at', 'updated_at', 'rules', 'status']

  constructor(private usersService: UsersService) { }



  ngAfterViewInit() {
    console.log(this.table)
  }

  ngOnInit(): void {
    this.usersService.getUsers()
      .pipe(map((res: IUser[]) => {
        this.dataSource = res;
      }))
      .subscribe(noop)
  }

}
