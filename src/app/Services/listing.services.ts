import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {IRest} from '../model/rest.model';
import { Observable } from "rxjs";

@Injectable()

export class listingServices {
        private baseUrl ="https://zomatoajulypi.herokuapp.com";

        constructor(private http:HttpClient) {}
            getRest(mealId:number):Observable<IRest[]> {
                return this.http.get<IRest[]>(`${this.baseUrl}/restaurant?stateId=1=${mealId}`)
            }
        }