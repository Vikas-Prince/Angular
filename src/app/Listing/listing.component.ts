import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRest } from '../model/rest.model';
import { listingServices } from '../Services/listing.services';

@Component({
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.css']
})

export class listingComponent implements OnInit {
    mealId: number=1;
    userinput:string="";
    restaurants:IRest[] =[]
    filterText:string="Cuisine Filter";
    constructor(private router: ActivatedRoute,
                private listingServices: listingServices){
    }
    ngOnInit(): void {
        this.mealId = Number(this.router.snapshot.params['id']);
        sessionStorage.setItem('meailId', this.mealId.toString());
        this.listingServices.getRest(this.mealId)
        .subscribe((data:IRest[]) =>
        {this.restaurants= data})
    }

     dataReceive(cuisineId:string){
        console.log('cuisineId>>> ', cuisineId)
     }
}