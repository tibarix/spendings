import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ReversePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'capitalize',
  pure : false
})
export class CapitalizerPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value:string) {
    if(value.trim() == ""){
      return "-";
    }
    return value[0].toUpperCase()+ value.substring(1);
  }
}
