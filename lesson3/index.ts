import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log('observable içi');
  subscriber.next('Java');
  subscriber.next('Flutter');

  setTimeout(() => {
    subscriber.next('Kotlin');
    subscriber.complete();
  }, 3000); //burası uzun süren bir işlem olduğu için program çalışmaya devam eder ve 3 saniye sonra burayı çalıştırır.

  return () => {
    console.log('teardown çalıştı');
  };
});

console.log('subscribe olmadan önce');
// observable$.subscribe((val) => console.log(val));
//complete'e özgü bir yazdırma işlemi yazdırmak isteediğimizde kısa format işimizi görmeyecektir.

observable$.subscribe({
  next: (val) => console.log(val),
  complete: () => console.log('completed'),
});
console.log('subscribe olduktan sonra');
