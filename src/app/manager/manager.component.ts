import { Component, OnInit } from '@angular/core';
import { noop } from 'rxjs';
import { map } from 'rxjs/operators'
import { UsersService } from './services/user.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  menuIsOpened: boolean = false;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers()
      .pipe(map((res) => {
        console.log(res)
      }))
      .subscribe(noop, (err) => {
        console.log(err)
      })

    this.usersService.createUser({
      email: "marco.alberto@tvglobo.com.br",
      created_at: "2020-12-31T00:00:00",
      updated_at: null,
      rules: 2,
      status: true,
      user: "MALBERTO"
    })
      .pipe(map((res) => {
        console.log(res)
      }))
      .subscribe(noop, (err) => console.log(err))
  }

  openMenu() {
    this.menuIsOpened = true;
  }

  closeMenu() {
    this.menuIsOpened = false;
  }

}
