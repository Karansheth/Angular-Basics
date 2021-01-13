import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textWrap'
})
export class TextWrapPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    let WrappedStr = value.slice(0,35)
    if(value.length>35){
      WrappedStr = WrappedStr+"..."
    }
  return WrappedStr;

  }
}
