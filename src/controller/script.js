

let boton = document.getElementById('boton');

let hideText = document.getElementById('hideText');

boton.addEventListener('click',toggleText);

function toggleText(){
    hideText.classList.toggle('show');

    if(hideText.classList.contains('show')){
        boton.innerHTML = 'Comprar';
        
    }

    else{
        boton.innerHTML='Ver sillas';
        
    }
}