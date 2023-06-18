import { Subject } from 'rxjs';
const sub = new Subject();

sub.next(1);
//A2'den önce emit edildiği için kullanılmayacak.
sub.subscribe((x) => console.log('Subscribe A :', x));

sub.next(2);
sub.subscribe((x) => console.log('Subscribe B : ', x));

sub.next(3);
//A'dan ve B'den sonra emit edildiği için ortak kullanılack.

// Subscribe A :2
// Subscribe A :3
// Subscribe B :3
