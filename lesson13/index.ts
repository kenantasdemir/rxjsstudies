import { of, merge } from 'rxjs';

let list1 = of(1, 2, 3, 4, 5);
let list2 = of(4, 5, 6, 7, 8, 9);

let final_list = merge(list1, list2);
//2 observableı birleştirir.

final_list.subscribe((x) => console.log(x));
