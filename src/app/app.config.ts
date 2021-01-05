import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class Config {

    public readonly baseurl = "http://localhost:3000/"
}