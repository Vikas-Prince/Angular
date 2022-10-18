import { NgModule } from "@angular/core";
import { Routes, RouterModule, } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { listingComponent } from './Listing/listing.component';
import { NotFoundComponent } from "./NotFound/NotFound.component";


const routes: Routes =[
    {path:'listing/:id', component: listingComponent},
    {path:'Home', component: HomeComponent},
    {path:'', component: HomeComponent},
    {path:'**', pathMatch:'full', component:NotFoundComponent}
      
]

@NgModule ({
    imports:[RouterModule.forRoot(routes)],
    providers:[],
    exports: [RouterModule]
})
export class AppRoutingModule { }