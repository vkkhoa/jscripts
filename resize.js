// iterate over the children of an element, and the element itself
// and excute a callback function, passing in the elements
function mapElement(element, callback){
    callback(element);    
    for(var i=0; i < element.children.length; i++){
        callback(element.children[i]);
    }
}

mapElement(
    document.querySelector('body'), 
    (e) => { 
        e.style.fontFamily = 'Arial';
        e.style.fontSize = '15pt'; 
    }
);