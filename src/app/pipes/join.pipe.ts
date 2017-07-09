import { Pipe, PipeTransform } from '@angular/core'
@Pipe({
    name: 'join'
})

export class JoinPipe implements PipeTransform {

    transform(val: Array<any>, arg1: any, arg2: any): string {
        let res = '';
        res = val.slice(arg1, arg2).join(',');
        return res;
    }
}
