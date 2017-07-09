import { User } from '../models/user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteringUsers'
})

export class FilteringUsersPipe implements PipeTransform {

  transform(users: User[], filter: string): User[] {

    if (!users || !filter) return users;

      return users.filter(u => {
        return u.firstName.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ||
               u.lastName.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ||
               u.email.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    });
  }
}
