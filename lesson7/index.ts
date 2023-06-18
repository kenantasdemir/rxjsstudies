import { Observable } from 'rxjs';

const helloButton = document.querySelector('button#hello');

const kaydetClick$ = new Observable<MouseEvent>((subscriber) =>
  helloButton.addEventListener('click', (event) => {
    subscriber.next(event as MouseEvent);
  })
);

kaydetClick$.subscribe((event) =>
  console.log('Sub 1 : ' + event.type, event.x, event.y)
);
kaydetClick$.subscribe((event) =>
  console.log('Sub 2 : ' + event.type, event.x, event.y)
);

/*

Hot Observable, RxJava gibi reaktif programlama kütüphanelerinde kullanılan bir terimdir. Observable, olay akışı sağlayan ve abonelere veri yayınlayan bir yapıdır. Hot Observable, olay akışını başlatır ve verileri hemen yayınlar, yani aboneler Observable'ın başlamasını beklemek zorunda değildir.

Hot Observable'lar, olayları yayınlamaya başladıkları anda var olan abonelere verileri iletebilir. Bu aboneler, olay akışının başlama anını kaçırmadan verileri alabilirler. Bir Hot Observable'ın olayları, abone olmadan önce de başlayabilir ve aboneler olayları kaçırmadan önce abone olabilirler.

Bir örnek vermek gerekirse, bir sensörden gelen verileri yayınlayan bir Observable düşünelim. Bu Observable, verileri okuduğu anda hemen yayınlar ve abonelere iletebilir. Eğer aboneler Observable'ın başlama anını kaçırırsa, olayları kaçırabilirler. Bu nedenle, Hot Observable'lar genellikle sürekli olarak veri yayınlamak ve abonelerin istedikleri an verilere erişmelerini sağlamak için kullanılır.

Öte yandan, Cold Observable ise olayları yayınlamaya başlamadan önce abone olmanız gereken Observable'dır. Olaylar, abonelik başladıktan sonra yayınlanır. Bu tür bir Observable, her abonelikte olayları baştan başlatır ve olayları aboneler arasında paylaşmaz.

*/
