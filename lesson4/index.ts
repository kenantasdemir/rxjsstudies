import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log('observable içi');
  subscriber.next('Java');
  subscriber.next('Flutter');

  setTimeout(() => {
    subscriber.next('Angular');
  }, 3000); //burası uzun süren bir işlem olduğu için program çalışmaya devam eder ve 3 saniye sonra burayı çalıştırır.

  setTimeout(() => {
    subscriber.error(new Error('Hata Aldık'));
  }, 3000);

  return () => {
    console.log('teardown çalıştı.(en son teardown çalışır.)');
  };
});

console.log('subscribe olmadan önce');

observable$.subscribe({
  next: (val) => console.log(val),
  error: (error) => error.message,
  complete: () => console.log('completed'),
});
console.log('subscribe olduktan sonra');
