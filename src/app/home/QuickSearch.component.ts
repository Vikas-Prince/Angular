import { Component, OnInit} from "@angular/core";
import { Meal } from "../model/meal.model";
import { HomeService } from "../Services/Home.Service";

@Component({
    selector:'app-quick',
    templateUrl: './QuickSearch.component.html',
    styleUrls: ['./QuickSearch.css']

})

export class QuickSearchComponent implements OnInit { 
    imgUrl: string ="../../assets/images/business.png";
    Opened= Date.now();
    price: number = 10;
    MealType:Meal [] = []

    constructor (private homeService: HomeService){}
    ngOnInit(): void {
    this.homeService.getItem()
    .subscribe((data:Meal[]) => this.MealType = data)
  }
}