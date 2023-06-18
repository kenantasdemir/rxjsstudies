import { ReplaySubject } from 'rxjs';
const sub = new ReplaySubject(3);
//2.subscribe işlemini gördüğünde emit edilen son 3 değeri bastırır.
//3.subscribe işlemini gördüğünde de emit edilen son 3 değeri bastırır.

sub.next(1);
sub.next(2);
sub.subscribe(console.log);
sub.next(3);
sub.next(4);
sub.subscribe(console.log);
sub.next(5);
//2 adet subscribe işlemi olduğu emit edilen 5 değerini 2 defa yazar.

sub.subscribe(console.log);
