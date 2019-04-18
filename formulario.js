console.log('Hola mundo')

var form = document.querySelector('form');

var nombre = document.getElementById('name');
var persona = document.getElementById('persona')

var edad = document.getElementById('age');
var pregunta = document.getElementById('pregunta');

var soltero = document.getElementById('single')
var casado = document.getElementById('taken')
var corazon = document.getElementById('corazon')

var nacionalidad = document.getElementById('nationality')
var bandera = document.getElementById('nac')

nombre.onfocus = function(){
    persona.classList.add('naranja')
}

nombre.onblur = function(){
    persona.classList.add('gris')
};

edad.onfocus = function(){
    pregunta.classList.add('naranja')
}

edad.onblur = function(){
    pregunta.classList.add('gris')
};

soltero.onfocus = function(){
    corazon.classList.add('naranja')
}

soltero.onblur = function(){
    corazon.classList.add('gris')
};

casado.onfocus = function(){
    corazon.classList.add('naranja')
}

casado.onblur = function(){
    corazon.classList.add('gris')
};


nacionalidad.onfocus = function(){
    bandera.classList.add('naranja')
}

nacionalidad.onblur = function(){
    bandera.classList.add('gris')
};

var estadoCivil = false;

if(soltero.checked || casado.checked){
    estadoCivil = true;
}

if(soltero.checked){
    console.log('algo')
}
if(casado.checked){
    console.log('otra cosa')
}


form.onsubmit = function(e){

    e.preventDefault();

    if(!nombre.value.length){

        nombre.classList.add('error')   
        persona.classList.add('rojo') 
    }

    if(edad.value< 18 || edad.value > 120){
 
        edad.classList.add('error') 
        pregunta.classList.add('rojo')
    
    }

    if(!soltero.checked && !casado.checked){

        corazon.classList.add('rojo')
    }

    if(nombre.value.length> 0 && (edad.value >18 && edad.value < 120) && estadoCivil == true){
        console.log('hola')
    }else {
        console.log('no funciona')
    }

   
}

