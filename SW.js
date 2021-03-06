// static cache version
var cacheVersion = "resturantV1";

// cache install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheVersion).then(cache => {
      cache.addAll([
        "/",
        "/index.html",
        "/restaurant.html",
        "/css/styles.css",
        "/js/main.js",
        "/js/restaurant_info.js",
        "/data/restaurants.json",
        "/js/dbhelper.js",
        "/img/1.jpg",
        "/img/2.jpg",
        "/img/3.jpg",
        "/img/4.jpg",
        "/img/5.jpg",
        "/img/6.jpg",
        "/img/7.jpg",
        "/img/8.jpg",
        "/img/9.jpg",
        "/img/10.jpg"
      ]);
    })
  );
});

// activating the caches
self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

// match the caches & respond
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(response => {
      return response || fetch(event.request);
    })
  );
});
