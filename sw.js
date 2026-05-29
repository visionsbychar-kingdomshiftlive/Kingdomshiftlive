self.addEventListener('install', event => {
  console.log('KingdomShift.Live Service Worker Installed');
});

self.addEventListener('activate', event => {
  console.log('KingdomShift.Live Service Worker Activated');
});
