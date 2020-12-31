import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Config } from "src/app/app.config";
import { IUser } from "../interfaces/IUser";

@Injectable({
    providedIn: "root"
})
export class UsersService {


    constructor(private http: HttpClient, private config: Config) {

    }

    public getUsers(page: number = 1, perPage: number = 10) {
        return this.http.get(`${this.config.apiurl}users?_page=${page}&_limit=${perPage}`);
    }

    public createUser(user: IUser) {
        return this.http.post(`${this.config.apiurl}users`, user);
    }
}