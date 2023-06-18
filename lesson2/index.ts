import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log('observable içi');
  subscriber.next('Java');
  subscriber.next('Flutter');

  setTimeout(() => {
    subscriber.error(new Error('Hata Aldık'));
  }, 2000);

  setTimeout(() => {
    subscriber.next('React Native');
    subscriber.complete();
  }, 4000);

  return () => {
    console.log('teardown çalıştı');
  };
});

console.log('subscribe olmadan önce');
observable$.subscribe({
  next: (val) => console.log(val),
  error: (error) => error.message,
  complete: () => console.log('completed'),
});
console.log('subscribe olduktan sonra');

//error veya complete'den sonra hiç bir blok çalışmaz
