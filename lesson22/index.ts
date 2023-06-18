import { AsyncSubject } from 'rxjs';
const sub = new AsyncSubject();

sub.subscribe(console.log);
sub.next(123);

sub.subscribe(console.log);

sub.next(456); //complete operatoründen önce en son emit edilen değeri bastırır.
sub.complete();
