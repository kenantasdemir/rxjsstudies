import { forkJoin, Observable } from 'rxjs';

const react$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.next('React eğitimi');
    subscriber.complete();
  }, 2000);
});

const angular$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.error('failure');
  }, 4000);
});

//angular adlı observable complete görmediği için forkJoin çalışmaz

forkJoin([react$, angular$]).subscribe({
  next: (val) => console.log(val),
  error: (err) => console.log('Error : ', err),
});
