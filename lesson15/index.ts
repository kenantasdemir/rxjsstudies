import { startWith, endWith } from 'rxjs/operators';
import { of } from 'rxjs';

const source = of(1, 2, 3);
const example = source.pipe(startWith(0));
const example2 = source.pipe(endWith(0));

const subscribe = example.subscribe((val) => console.log(val));
console.log('*****************************');
const subscription = example2.subscribe((val) => console.log(val));
console.log('*****************************');

const kaynak$ = of('React', 'Angular', 'Vue');
kaynak$.pipe(endWith('Svelte')).subscribe((val) => console.log(val));
