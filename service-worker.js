const CACHE_NAME = "arewa-vtu-cache-v1";
const urlsToCache = [
"/",
"/index.html",
"/styles.css",
"/app.js"
];

// Install event
self.addEventListener("install", (event) => {
event.waitUntil(
caches.open(CACHE_NAME).then((cache) => {
return cache.addAll(urlsToCache);
})
);
});

// Fetch event
self.addEventListener("fetch", (event) => {
event.respondWith(
fetch(event.request)
.then((response) => {
let responseClone = response.clone();
caches.open(CACHE_NAME).then((cache) => {
cache.put(event.request, responseClone);
});
return response;
})
.catch(() => {
return caches.match(event.request).then((cachedResponse) => {
return cachedResponse || new Response("⚠️ Babu network kuma ba'a samu cache ba.");
});
})
);
});
