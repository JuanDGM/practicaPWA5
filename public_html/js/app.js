

let url = window.location.href;

let swLocation= '//sw.js';


if(navigator.serviceWorker){
    
    if(url.includes('localhost')){
        
        navigator.serviceWorker.register('./sw.js');
    }else{
        
        navigator.serviceWorker.register(swLocation);
    }
    
    
}







