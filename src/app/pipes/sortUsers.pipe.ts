import { User } from '../models/user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortingUsers'
})

export class SortingUsersPipe implements PipeTransform {

  transform(users: User[], path: string[], order: number): User[] {

    if (!users || !path || !order) return users;

    return users.sort((a: User, b: User) => {
      path.forEach(property => {
        a = a[property];
        b = b[property];
      })
      return a > b ? order : order * (- 1);
    })
  }

}
