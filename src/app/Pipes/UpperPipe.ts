/*import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy'

})

export class UpperPipe implements PipeTransform {
    transform(value: string, kindOf: string) :string{
        if(kindOf == 'Upper'){
            return value.toUpperCase();
        }
        else{
           value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        }
        return value
    }
}*/
import { Pipe,PipeTransform } from '@angular/core';

@Pipe({ 
    name: 'MyUpper'

 })
 export class UpperPipe implements PipeTransform {
    transform(value: string):string {
        value = value.toUpperCase()
        return value
    }
        
 }