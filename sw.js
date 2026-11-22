const CACHE_NAME = 'hjs-year7-portal-visual-v3';
const CORE = [
 './','./index.html','./manifest.webmanifest','./css/style.css','./css/visual-study-notes.css',
 './js/modules.js','./js/visual-study-notes.js','./js/workbook-answers.js','./js/quizzes.js','./js/examinations.js','./js/app.js','./js/portal-auth.js',
 './assets/logo1.png','./assets/logo-fallback.svg'
];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(CORE))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
  if(response.ok&&new URL(event.request.url).origin===self.location.origin){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));}
  return response;
 }).catch(()=>caches.match('./index.html'))));
});
