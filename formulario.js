console.log('Hola mundo');

const form = document.querySelector('form');

const nombre = document.getElementById('name');
const pers = document.getElementById('persona');

const edad = document.getElementById('age');
const preg = document.getElementById('pregunta');

const soltero = document.getElementById('single');
const casado = document.getElementById('taken');
const corazon = document.getElementById('corazon');

const nac = document.getElementById('nationality');
const bandera = document.getElementById('nac');

const persona = () => pers.classList.add('naranja');
const noPersona = () => pers.classList.remove('naranja');

const pregunta = () => preg.classList.add('naranja');
const noPregunta = () => preg.classList.remove('naranja');

const estado = () => corazon.classList.add('naranja');
const noEstado = () => corazon.classList.remove('naranja');

const nacionalidad = () => bandera.classList.add('naranja');
const noNacionalidad = () => bandera.classList.remove('naranja');


form.onsubmit = (e) => {

    e.preventDefault();

    if(!nombre.value.length){

        nombre.classList.add('error')   
        pers.classList.add('rojo') 
    }

    if(edad.value< 18 || edad.value > 120 || edad.value ===""){
 
        edad.classList.add('error') 
        preg.classList.add('rojo')
    
    }
    if(!login.status[0].checked && !login.status[1].checked){

        corazon.classList.add('rojo')
    }

    let estadoCivil = false;

    if(login.status[0].checked || login.status[1].checked){

        estadoCivil = true;
    }

    if(nombre.value.length> 0 && (edad.value >18 && edad.value < 120) && estadoCivil == true){

        agregarInvitado();
    }

}

const agregarInvitado = () => {

    var lista = document.getElementById('invitados')
    var invitado = document.createElement('div')

    invitado.classList.add('visible')

      var estado = ''

    if(login.status[0].checked) {

        estado = 'Quiero conocer gente'

    } else if (login.status[1].checked) {

        estado = 'No me presenten a nadie'
    }

    const i = nac.selectedIndex;
    const pais = nac.options[i].value;

    const spanes = ['Nombre: ', 'Edad: ', 'Estado Civil: ', 'Nacionalidad: '];
    const datos = [nombre.value, edad.value, estado, pais]

    for(let i=0; i<spanes.length; i++){
        const span = document.createElement('span');
        span.textContent = spanes[i];

        const input = document.createElement('input');
        input.value = datos[i];

        const br = document.createElement('br');

        invitado.appendChild(span);
        invitado.appendChild(input);
        invitado.appendChild(br);
    }

    const boton = document.createElement('button');
    boton.textContent = 'borrar';

    invitado.appendChild(boton);

    lista.appendChild(invitado);

    boton.onclick = function(){

        boton.parentNode.remove();
    }
    
}
