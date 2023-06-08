const formularioPacientes = document.getElementById('registro_pacientesCM-form')
formularioPacientes.addEventListener('submit', (event) =>{
event.preventDefault();
const datosPaciente = {
nombrePaciente: document.getElementById('paciente').value,
apellidoPaciente: document.getElementById('apellido').value,
cedulaPaciente: document.getElementById('cedula').value,
edadPaciente: document.getElementById('edad').value,
telefonoPaciente: document.getElementById('telefono').value,
especialidad: document.getElementById('especialidad').value
}
const jsonDatos = JSON.stringify(datosPaciente)
console.log(jsonDatos)
})