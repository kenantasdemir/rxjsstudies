import { fromEvent, Observable } from 'rxjs';

const saveButton = document.querySelector('button#btn');

const subscription = fromEvent<MouseEvent>(saveButton, 'click').subscribe(
  (event) => console.log(event.type, event.x, event.y)
);

setTimeout(() => {
  console.log('unsubscribe ');
  subscription.unsubscribe(); //fromEvent, unsubcribe olunduğunda kaynakları serbest bırakır. yani memory leake sebebiyet vermez.
}, 5000);

/*
const saveClick$ = new Observable<MouseEvent>((subscriber) => {
  const clickHandler = (event) => {
    console.log('merhaba dünya');
    subscriber.next(event as MouseEvent);
  };

  saveButton.addEventListener('click', clickHandler);

  return () => {
    saveButton.removeEventListener('click', clickHandler);
  };
});

const subscription = saveClick$.subscribe((event) =>
  console.log(event.type, event.x, event.y)
);

setTimeout(() => {
  console.log('unsubscribe ');
  subscription.unsubscribe();
}, 5000);


*/
