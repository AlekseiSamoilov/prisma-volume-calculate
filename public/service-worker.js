// Версия кэша (увеличивайте при существенных обновлениях приложения)
const CACHE_NAME = 'geocalc-cache-v2';

// Домены, запросы к которым не нужно кэшировать (Яндекс.Метрика и др.)
const EXCLUDED_DOMAINS = ['yastatic.net', 'mc.yandex.ru', 'ads.yandex.ru'];

// Файлы, которые нужно предварительно закэшировать для оффлайн-работы
const PRECACHE_ASSETS = [
    '/prisma-volume-calculate/',
    '/prisma-volume-calculate/index.html',
    '/prisma-volume-calculate/install-guide.html',
    '/prisma-volume-calculate/manifest.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                // console.log('Открытие кэша и предварительное кэширование важных ресурсов');
                return cache.addAll(PRECACHE_ASSETS);
            })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {

                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {

    if (EXCLUDED_DOMAINS.some(domain => event.request.url.includes(domain))) {
        return;
    }

    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then((response) => {

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

                return caches.match(event.request)
                    .then((cachedResponse) => {
                        if (cachedResponse) {
                            return cachedResponse;
                        }


                        if (event.request.mode === 'navigate') {
                            return caches.match('/prisma-volume-calculate/index.html');
                        }


                        return new Response('Ресурс недоступен в оффлайн-режиме', {
                            status: 503,
                            headers: { 'Content-Type': 'text/plain; charset=utf-8' }
                        });
                    });
            })
    );
});