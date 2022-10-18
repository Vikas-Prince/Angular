import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './home/home.component';
import { QuickSearchComponent } from './home/QuickSearch.component';
import { SearchComponent } from './home/Search.component';
import { UpperPipe } from './Pipes/UpperPipe';
import { HomeService } from './Services/Home.Service';
import { listingComponent } from './Listing/listing.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { FormsModule } from '@angular/forms';
import { listingServices } from './Services/listing.services';
import { SearchPipe } from './Pipes/Search.Pipe';
import { CuisineFilterComponent } from './filters/CuisineFilter.component';

//decorator
@NgModule({

    //all the components and pipes are declare here
    declarations: [
        AppComponent,
       HeaderComponent,
       FooterComponent,
       HomeComponent,
       SearchComponent,
       QuickSearchComponent,
       UpperPipe,
       listingComponent,
       NotFoundComponent,
       SearchPipe,
       CuisineFilterComponent
    ],

    //all the modules will be declare here
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],

    //all the services wil be declare here
    providers: [
        HomeService,
        listingServices
    ],

    //only and only maincomponents will be declare here
    bootstrap: [
        AppComponent
    ]
    //all the modules will be declare here

})
export class AppModule {}