import { Pipe, PipeTransform} from "@angular/core";
import { IRest } from "../model/rest.model";

@Pipe({
    name:'SearchFilter',
})

export class SearchPipe implements PipeTransform {
    transform(value: IRest[], userinput: string){
        userinput = userinput ? userinput.toLowerCase():'';
        return userinput ? value.filter((data)=> 
        (data.restaurant_name.toLowerCase().indexOf(userinput)>-1)):value
    }
        
    }