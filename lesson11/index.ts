import { Observable, interval } from 'rxjs';

console.log('uygulama başladı..');

//timerda olduğu gibi 0 dan başlar. 1000ms yani 1saniyede bir değeri arttırır ve konsola yazar.
const subscription = interval(1000).subscribe({
  next: (val) => console.log(val),
  complete: () => console.log('completed'),
});

setTimeout(() => {
  subscription.unsubscribe();
  console.log('unsubscribed ');
}, 3000);
