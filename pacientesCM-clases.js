let tablaPacientes = document.getElementById("tabla-pacientes")
let cuerpoTabla = tablaPacientes.querySelector("tbody");

//clases Pacientes
class Paciente {
constructor(nombrePaciente,apellidoPaciente,cedulaPaciente,edadPaciente,telefonoPaciente,especialidad){
this.nombrePaciente = nombrePaciente;
this.apellidoPaciente = apellidoPaciente;
this.cedulaPaciente = cedulaPaciente;
this.edadPaciente = edadPaciente;
this.telefonoPaciente = telefonoPaciente;
this.especialidad = especialidad
}
}
//objetos
let paciente1 = new paciente("Milena","Aristizabal","1234567","25 años","3105678946","Radiologia")
let paciente2 = new paciente("Ximena","Quintero","1234345567","34 años","3103458946","Psicologia")
let paciente3 = new paciente("Jose","Waterson","123434567887","50 años","311234566","Medicina interna")
let paciente4 = new paciente("Nicole","Swanson","1345678999","26 años","31056745678","Odontologia")
let paciente5 = new paciente("Anais","Blanco","1345678999","28 años","310545678","Odontologia")
//objetos
let pacientes = [paciente1,paciente2,paciente3,paciente4,paciente5]


for (let i = 0; i < pacientes.length; i++) {
let paciente = paciente[i];

let fila = cuerpoTabla.insertRow();
let celdaNombrePaciente = fila.insertCell();
let celdaApellidoPaciente = fila.insertCell();
let celdaCedulaPaciente = fila.insertCell();
let celdaEdadPaciente = fila.insertCell();
let celdaTelefonoPaciente = fila.insertCell();
let celdaEspecialidad = fila.insertCell();

celdaNombrePaciente.textContent =paciente.nombrePaciente;
celdaApellidoPaciente.textContent = paciente.apellidoPaciente;
celdaCedulaPaciente.textContent = paciente.cedulaPaciente;
celdaEdadPaciente.textContent = paciente.edadPaciente;
celdaTelefonoPaciente.textContent = paciente.telefonoPaciente;
celdaEspecialidad.textContent = paciente.especialidad;

}