const CACHE_NAME = "mafia-detective-v19";
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./game.js",
  "./music/morning.mp3",
  "./music/night.mp3",
  "./music/succes.mp3",
  "./music/fail.mp3",
  "./music/click.mp3",
  "./music/typing.mp3",
  "./img/캐릭터/캐릭터.png",
  "./icon-192.png",
  "./icon-512.png",
  "./manifest.json"
];

// 서비스 워커 설치 및 리소스 캐싱
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// 활성화 및 구버전 캐시 삭제
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 리소스 요청 가로채기 (네트워크 우선 혹은 캐시 우선 전략)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        // 오프라인 상태 대응
      });
    })
  );
});
