import { forkJoin, of, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';

//forkJoin içerisine observable alır. içeridei observableların hepsinin bitmiş olması gerekiyor.
//hepsi tamamlandığında çalışır. en son değeri emit edilir.

/*
const observable$ = forkJoin({
  foo: of(1, 2, 3, 4),
  bar: Promise.resolve(8),
  baz: timer(4000), //en son burası çalışır. 4 saniye sonra çalışır
});

observable$.subscribe({
  next: (val) => console.log(val),
  complete: () => console.log('this is how it ends'),
});

*/

const randomName$ = ajax('https://random-data-api.com/api/name/random_name');

const randomNation$ = ajax(
  'https://random-data-api.com/api/nation/random_nation'
);

const randomFood$ = ajax('https://random-data-api.com/api/food/random_food');

// randomName$.subscribe((ajaxResponse) =>
//   console.log(ajaxResponse.response['first_name']
// )

// randomName$.subscribe((ajaxResponse) =>
//   console.log(ajaxResponse.response['first_name'])
// );
// randomNation$.subscribe((ajaxResponse) =>
//   console.log(ajaxResponse.response['capital'])
// );
// randomFood$.subscribe((ajaxResponse) =>
//   console.log(ajaxResponse.response['dish'])
// );

forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
  ([randomName, randomNation, randomFood]) =>
    console.log(`${randomNation.response['capital']} da yaşayan
  ${randomName.response['first_name']}
  ${randomFood.response['dish']} yemeyi çok sever
  `)
);
