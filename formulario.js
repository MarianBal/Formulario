console.log('Hola mundo')

var form = document.querySelector('form');

var nombre = document.getElementById('name');
var pers = document.getElementById('persona')

var edad = document.getElementById('age');
var preg = document.getElementById('pregunta');

var soltero = document.getElementById('single')
var casado = document.getElementById('taken')
var corazon = document.getElementById('corazon')

var nac = document.getElementById('nationality')
var bandera = document.getElementById('nac')


function persona(){
    pers.classList.add('naranja')
}

function noPersona(){
    pers.classList.remove('naranja')
}

function pregunta(){
    preg.classList.add('naranja')
}

function noPregunta(){
    preg.classList.remove('naranja')
};

function estado(){
    corazon.classList.add('naranja')
}

function noEstado(){
    corazon.classList.remove('naranja')
};

function nacionalidad(){
    bandera.classList.add('naranja')
}

function noNacionalidad(){
    bandera.classList.remove('naranja')
};




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
    if(!login.status[0].checked && !login.status[1].checked){

        corazon.classList.add('rojo')
    }

    var estadoCivil = false;

    if(login.status[0].checked || login.status[1].checked){

        estadoCivil = true;
    }

    if(nombre.value.length> 0 && (edad.value >18 && edad.value < 120) && estadoCivil == true){

        agregarInvitado();
    }

}

function agregarInvitado(){

    var lista = document.getElementById('invitados')
    var invitado = document.createElement('div')

    invitado.classList.add('visible')

      var estado = ''

    if(login.status[0].checked) {

        estado = 'Quiero conocer gente'

    } else if (login.status[1].checked) {

        estado = 'No me presenten a nadie'
    }

    var i = nac.selectedIndex;
    var pais = nac.options[i].value;

    var spanes = ['Nombre: ', 'Edad: ', 'Estado Civil: ', 'Nacionalidad: '];
    var datos = [nombre.value, edad.value, estado, pais]

    for(var i=0; i<spanes.length; i++){
        var span = document.createElement('span');
        span.textContent = spanes[i];

        var input = document.createElement('input');
        input.value = datos[i];

        var br = document.createElement('br');

        invitado.appendChild(span);
        invitado.appendChild(input);
        invitado.appendChild(br);
    }

    var boton = document.createElement('button');
    boton.textContent = 'borrar';

    invitado.appendChild(boton);

    lista.appendChild(invitado);

    boton.onclick = function(){

        boton.parentNode.remove();
    }
    
}
