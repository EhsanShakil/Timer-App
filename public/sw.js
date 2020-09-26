const CACHE_NAME = "TIMER-APP";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll([
        "/",
        "/index.html",
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/static/js/bundle.js",
      ]);
    })
  );
});
this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((result) => {
      if (result) {
        return result;
      }
      let requestUrl = event.request.clone();
      return fetch(requestUrl);
    })
  );
});
