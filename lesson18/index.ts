import { combineLatest, interval } from 'rxjs';

// İki Observable oluşturma
const observable1 = interval(1000); // Her 1 saniyede bir değer yayınlar
const observable2 = interval(2000); // Her 2 saniyede bir değer yayınlar

// combineLatest ile iki Observable'ı birleştirme
const combinedObservable = combineLatest([observable1, observable2]);

// Birleştirilmiş Observable'ı dinleme
combinedObservable.subscribe(([value1, value2]) => {
  console.log(`Value 1: ${value1}, Value 2: ${value2}`);
});
