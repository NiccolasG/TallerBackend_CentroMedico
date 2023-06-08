let tablaMedicos = document.getElementById("tabla-mascotas")
let cuerpoTabla = tablaMascotas.querySelector("tbody");

//clases medicos
class Medico {
constructor(nombreMedico,apellidoMedico,cedulaMedico,especialidad,consultorioMedico,correoContacto,paciente){
this.nombreMedico = nombreMedico;
this.apellidoMedico = apellidoMedico;
this.cedulaMedico = cedulaMedico;
this.especialidad = especialidad;
this.consultorio = consultorio;
this.correo = correo;
}
}
//objetos
let medico1 = new Medico("Linda","Martinez","1234567","29 años","Medicina General","xxxx@gmail.com","xxx@yahoo.com")
let medico2 = new Medico("Oscar","Cardenas","456778","37 años","Medicina Interna","xxxx@gmail.com","xxx@gmail.com")
let medico3 = new Medico("Antonio","Torres","1345678","35 años","3105678946","Radiologia","xxx@outlook.com")
let medico4 = new Medico("Maria","Cortez","1234567","25 años","3105678946","Odontologia","xxx@hotmail.com")
let medico5 = new Medico("Daniel","Cortez","1234567","45 años","310569746","Psicologia","xxx@hotmail.com")
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