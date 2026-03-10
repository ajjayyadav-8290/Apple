
self.addEventListener("install", e => {

e.waitUntil(
caches.open("memoryvault").then(cache => {

return cache.addAll([
"/",
"/index.html",
"/style.css",
"/script.js"
])

})
)

})
