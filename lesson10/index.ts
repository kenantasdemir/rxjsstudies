import { Observable, timer } from 'rxjs';

//default olarak 0 değerini emit eder.

console.log('uygulama başladı..');

//2 saniye observable'a girer.
const subscription = timer(2000).subscribe({
  next: (val) => console.log(val),
  complete: () => console.log('completed'),
});

// Observable oluşturulmadan önce unsubscribe olursanız çalışmaz

setTimeout(() => {
  subscription.unsubscribe();
  console.log('unsubscribed ');
}, 3000);
