importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { CacheFirst } = workbox.strategies;
const { CacheableResponse } = workbox.cacheableResponse;
const { precacheAndRoute } = workbox.precaching;


// precacheAndRoute([
//   { url: '/index.html', revision: null },
//   { url: '/style.css', revision: null },
//   { url: '/paper.jpg', revision: null },
//   // ... other entries ...
// ]);


// This will work!
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst()
);


