import { of, from, fromEvent, interval, distinct, Observable } from 'rxjs';
import {
  first,
  last,
  filter,
  map,
  tap,
  debounceTime,
  skip,
  skipWhile,
  take,
  takeLast,
  takeWhile,
  concatMap,
  switchMap,
  delay,
} from 'rxjs/operators';

/*
of(1, 2, 3)
  .pipe(first())
  .subscribe((v) => console.log(v));
*/

/*
const source = from([1,2,3,4,5,6,7,8,9,10])
source.pipe(filter(num=>num % 2 === 0)).subscribe(val=>console.log(`çift sayılar : ${val}`))

const kaynak = from([{name:"React",price:59},{name:"Angular",price:80}])
const example = kaynak.pipe(filter((course)=>course.price >= 70))
example.subscribe((val)=>console.log(val))

*/

/*
const source = from([1, 2, 3, 4, 5]);
const result = source.pipe(map((val) => val * 10));
result.subscribe((val)=>console.log(val))

*/

/*
const source = of(1, 2, 3, 4, 5);
const example = source.pipe(
  tap((val) => console.log(`BEFORE MAP: ${val}`)),
  map((val) => val * 10),
  tap((val) => console.log(`AFTER MAP: ${val}`))
);

const subscribe = example.subscribe((val) => console.log(val));
*/

/*
const searchBox = document.getElementById('search');
const keyup$ = fromEvent(searchBox, 'keyup');

keyup$
  .pipe(
    map((i: any) => i.currentTarget.value),
    debounceTime(2000)
  )
  .subscribe(console.log);
*/
/*
const sliderInput = document.querySelector('input#slider');

fromEvent(sliderInput, 'input')
  .pipe(
    map((event) => event.target['value']),
    debounceTime(2000)
  )
  .subscribe((value) => console.log(value));
*/

/*
const source = interval(1000);
const example = source.pipe(skip(4)); //ilk 4 elemanı atlar. bastırmaya 4 ten başlar.
example.subscribe((val) => console.log(val));

const numberArray = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
numberArray.pipe(skip(2)).subscribe(console.log);

numberArray
  .pipe(filter((val, index) => index > 2))
  .subscribe((val) => console.log(val));


  */

/*
const source = interval(1000);
const example = source.pipe(skipWhile((val) => val < 5)); //ilk 5 indeksi altar.
example.subscribe((val) => console.log(val));

*/

/*
const source = of(1, 2, 3, 4, 5);
source.pipe(take(2)).subscribe((val) => console.log(val)); //ilk 2 indeksi alır.

*/

/*
const source = of('React', 'Angular', 'Vue', 'Svelte', 'Django', 'Flutter');
const example = source.pipe(takeLast(2)); //son 2 indeksi alır.
example.subscribe((val) => console.log(val));

*/

/*
const source = of(1, 2, 3, 4, 5);
source.pipe(takeWhile((val) => val < 3)).subscribe((val) => console.log(val)); //3 ten küçük elemanları bastırır.
*/

/*
const source = from([1,2,3,4,5])
const example = source.pipe(first())
example.subscribe((val)=>console.log(val))

const example2 = source.pipe(last())
example2.subscribe((val)=>console.log(val))

*/

/*
of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5)
  .pipe(distinct())
  .subscribe((val) => console.log(val));

const obj1 = { id: 1, name: 'Ahmet' };
const obj2 = { id: 2, name: 'Mehmet' };
const obj3 = { id: 3, name: 'Murat' };

const vals = [obj1, obj2, obj3];
from(vals).pipe(distinct((e) => e.id)).subscribe((val)=>console.log(val))
*/

/*
const source$ = new Observable((subscriber) => {
  setTimeout(() => subscriber.next('React'), 2000),
    setTimeout(() => subscriber.next('Angular'), 4000);
});

// source$.subscribe((val) => console.log(val));
source$.pipe(concatMap((val) => of(1, 2))).subscribe((val) => console.log(val));
//React için 1 ve 2 değerlerini bastırır.
//Sıra Angular'a geldiğinde 1 ve 2 değerlerini angular için bastırır.

*/

/*
//dokümanda bir kere click eventi yakalandığında 1 saniye arayla 4 eleman bastırır. (interval sıfırdan başlar.)
//yeni bir click eventi yakalandığında bu işlemi baştan yapar.
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(concatMap((ev) => interval(1000).pipe(take(4))));
result.subscribe((x) => console.log(x));

*/

// Bir dizi oluşturuyoruz
const source = of(1, 2, 3, 4, 5);

// Her değer için asenkron bir işlem gerçekleştiriyoruz
const example = source.pipe(switchMap((value) => of(value).pipe(delay(1000))));

//sadece en son değer üzerinde çalışılır
example.subscribe((value) => console.log(value));
