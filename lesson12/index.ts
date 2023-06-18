import { interval, concat, of } from 'rxjs';

// concat(of(1, 2, 3), of(4, 5, 6)).subscribe(console.log);

concat(interval(1000), of('this', 'never', 'runs')).subscribe(console.log);
//interval her bir saniyede tekrar çalıştığı için of fonksiyonuna sıra gelmez bu yüzden sayaç gibi davranır.
