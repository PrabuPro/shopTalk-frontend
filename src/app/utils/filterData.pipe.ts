import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterData' })
export class FilterData implements PipeTransform {
    transform(data: any[], searchText: any) {  // replace the any with your interface for data.
        // return data.filter(s => ((s.firstName).toLowerCase().indexOf(searchText.toLowerCase()) !== -1));
        // change the condition as you need

        if (searchText === undefined) {
            return data;
        }

        return data.filter(function (user) {
            return (user.firstName + ' ' + user.lastName).toLowerCase().includes(searchText.toLowerCase());
        });
    }
}
