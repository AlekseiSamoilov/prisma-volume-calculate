const CACHE_NAME = 'geocalc-cache-v1';
const YANDEX_DOMAINS = ['yastatic.net', 'mc.yandex.ru'];

self.addEventListener('fetch', (event) => {
    // Пропускаем запросы к Яндексу
    if (YANDEX_DOMAINS.some(domain => event.request.url.includes(domain))) {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Кэшируем только успешные ответы
                if (response.status === 200) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseClone);
                        });
                }
                return response;
            })
            .catch(() => {
                return caches.match(event.request);
            })
    );
});