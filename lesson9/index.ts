import { of, from, Observable } from 'rxjs';

// of('Nehir', 'Yasin', 'Kenan').subscribe({
//   next: (val) => console.log(val),
//   complete: () => console.log('completed'),
// });

// from(['React', 'Angular', 'Vue']).subscribe({
//   next: (val) => console.log(val),
//   complete: () => console.log('completed'),
// });

// const array = [10, 20, 30];
// const result = from(array);
// result.subscribe((x) => console.log(x));

/*
const somePromise = new Promise((resolve, reject) => {
  // resolve('kabul edildi');
  reject("Reddedildi.")
});

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
  next: (val) => console.log(val),
  error: (err) => console.log('Error : ' + err),
  complete: () => console.log('completed '),
});
*/
