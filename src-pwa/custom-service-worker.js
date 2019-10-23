/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

// Needed to make PWA installable on chrome
self.addEventListener('install', function () {
  console.log('install event')
})

// Needed to make PWA installable on chrome
self.addEventListener('fetch', function (event) {
  console.log('fetch event')
})

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    // Used to skip the waiting of the update of the service worker
    self.skipWaiting()
  }
})
