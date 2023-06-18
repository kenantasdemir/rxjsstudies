import { BehaviorSubject } from 'rxjs';
const sub = new BehaviorSubject(0);

sub.next(1);
sub.subscribe((x) => console.log('Subscribe A :', x));

sub.next(2);
sub.subscribe((x) => console.log('Subscribe B : ', x));

sub.next(3);
