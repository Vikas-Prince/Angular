import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable} from "rxjs";
import { City} from '../model/location.model'
import { IRest } from "../model/rest.model";
import { Meal} from "../model/meal.model";

@Injectable()

export class HomeService{

    private baseUrl= "https://zomatoajulypi.herokuapp.com";

    constructor (private http:HttpClient){}
    
    getCity(): Observable<City[]>{
        return this.http.get<City[]>(`${this.baseUrl}/location`);

    }

    getRest(stateId:Number): Observable<IRest[]> {
        return this.http.get<IRest[]>(`${this.baseUrl}/restaurant?stateId=${stateId}`)
    }

    getItem(): Observable<Meal[]> {
        return this.http.get<Meal[]>(`${this.baseUrl}/quicksearch`)
    }
}