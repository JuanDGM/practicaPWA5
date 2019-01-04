
const CACHE_STATIC = 'static-v1';           
const CACHE_DYNAMIC = 'dinamic-v1';           

self.addEventListener('install', e=>{
    
    const respuesta = caches.open(CACHE_STATIC).then(cache=>{
        
        cache.addAll([
            'index.html',
            'js/app.js',
            'sw.js',
            'css/styles.css',
            'img/favicon.ico',
            'manifest.json'
        ]);
        
    });
    
    e.waitUntil(respuesta);
    
});


self.addEventListener('fetch', e=>{
    
    
    const respuesta = caches.match(e.request).then(res =>{
        
        if(res){
            
            return res;
        }else{
            
           return fetch(e.request.url).then(newRes=>{
               
               return caches.open(CACHE_DYNAMIC).then(r=>{
                   
                   r.put(e.request, newRes.clone());
                   return newRes.clone(); 
               });
               
           });
        
        
            
        }
        
    });
    
    e.respondWith(respuesta);
    
});

