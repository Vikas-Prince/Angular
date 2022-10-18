import { Component, OnInit } from '@angular/core';"@angular/core";
import { City } from "../model/location.model";
import { HomeService } from '../Services/Home.Service';
import {IRest } from '../model/rest.model';

@Component({
    selector:'app-search',
    templateUrl: './Search.component.html',
    styleUrls: ['./Search.css']

})

export class SearchComponent { 
    title:string ='Find best place near by you';
    keyword:string ='test data'
    locationData:City[] = []
    restaurant:IRest[] =[]

    constructor(private homeService: HomeService) {}

    ngOnInit():void {
        this.homeService.getCity()
        .subscribe((data:City[]) =>this.locationData = data)
          }
        
    

    Cities (event:Event) {
         console.log((event.target as HTMLInputElement).value)
         let stateId  = Number ((event.target as HTMLInputElement).value);
         this.homeService.getRest(stateId)
         .subscribe((data:IRest[])=>this.restaurant = data)

  }
}