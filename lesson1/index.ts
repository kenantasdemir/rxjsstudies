import { Observable } from 'rxjs';

new Observable((subscriber) => {
  subscriber.next(1); //1 değeri emit edildi
  subscriber.next(2); //2 değeri emit edildi
  subscriber.next(3); // 3 değeri emit edildi.
}).subscribe();

// $ işareti opsiyoneldir. değişkenin observable tuttuğunu ifade eder
const observable$ = new Observable<number>((subscriber) => {
  subscriber.next(1); //1 değeri emit edildi
  subscriber.next(2); //2 değeri emit edildi
  subscriber.next(3); // 3 değeri emit edildi.
});

//uzun yoldan observable sonucunu yazdırma
// const observer = {
//   next:(value:any)=>console.log(value)
// }
// observable$.subscribe(observer)

//kısa yoldan observable içeriğini yazdırma
const subscription = observable$.subscribe((val) =>
  console.log('Subscription1 ' + val)
);

// setTimeout(() => {
//   console.log('abonelik sonlandırılıyor.');
//   subscription.unsubscribe();
//   console.log('abonelik sonlandırıldı.');
// }, 3000);

setTimeout(() => {
  console.log('******************subscription2 ******************');
  observable$.subscribe((val) => console.log('Subscription2 ' + val));
});

//************************************************************************************************************************

//NEXT, COMPLETE,ERROR
//next ile değer atarız.
//complete ile değer ataması sonlanır.
//error ile değer ataması sonlanır. fakat error durumunu biz kontrol edemeyiz. error içinde hata mesajı tutulur.

//TEARDOWN memory leak gibi problemlerin önüne geçer.

//************************************************************************************************************************
