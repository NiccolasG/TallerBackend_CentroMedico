const formularioMedicos = document.getElementById('registro_medicosCM-form')
formularioMedicos.addEventListener('submit', (event) =>{
event.preventDefault();
const datosMedico = {
nombre: document.getElementById('nombre').value,
apellido: document.getElementById('apellido').value,
numeroCedula: document.getElementById('cedula').value,
numeroConsultorio: document.getElementById('consultorio').value,
telefono: document.getElementById('telefono').value,
correoContacto: document.getElementById('correo').value,
especialidad: document.getElementById('especialidad').value
}
const jsonDatos = JSON.stringify(datosMedico)
console.log(jsonDatos)
document.cookie = `medicos=${encodeURIComponent(jsonDatos)}`;
})
//Revisar muy bn este guardar 