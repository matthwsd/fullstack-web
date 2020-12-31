import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class Config {

    public readonly apiurl = "http://localhost:3000/"
}