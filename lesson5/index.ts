import { Observable } from 'rxjs';

const interval$ = new Observable<number>((subscriber) => {
  let counter = 1;
  const intervalRef = setInterval(() => {
    console.log('Number: ' + counter);
    subscriber.next(counter++);
  }, 1000);

  return () => {
    clearInterval(intervalRef);
    console.log('teardown çalıştı');
  };
});

const subscription = interval$.subscribe((val) => console.log(val));

setTimeout(() => {
  console.log('Finished');
  subscription.unsubscribe();
}, 5000);
