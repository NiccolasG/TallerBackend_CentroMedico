let tablaPacientes = document.getElementById("tabla-pacientes")
let cuerpoTabla = tablaMascotas.querySelector("tbody");


//objetos
let mascotas = [
{
nombrePaciente:"Agatha",
apellidoPaciente: "Romero",
cedulaPaciente: "1234509876",
edadPaciente: "35 años",
telefonoPaciente: "3105678946",
especialidad: "Odontologia",
},
{
nombrePaciente:"Emilio",
apellidoPaciente: "Romero",
cedulaPaciente: "238463865",
edadPaciente: "30 años",
telefonoPaciente: "31112476",
especialidad: "Medicina Interna",
},
{
nombrePaciente:"Sara",
apellidoPaciente: "Ramirez",
cedulaPaciente: "124798754",
edadPaciente: "25 años",
telefonoPaciente: "310375768",
especialidad: "Radiologia",
},
{
nombrePaciente:"Juliana",
apellidoPaciente: "Tovar",
cedulaPaciente: "1206867876",
edadPaciente: "26 años",
telefonoPaciente: "3124757758",
especialidad: "Cardiologia",
}
]


for (let i = 0; i < pacientes.length; i++ ){
let paciente = paciente[i];

let fila = cuerpoTabla.insertRow();
let celdaNombrePaciente = fila.insertCell();
let celdaApellidoPaciente = fila.insertCell();
let celdaCedulaPaciente = fila.insertCell();
let celdaEdadPaciente = fila.insertCell();
let celdaTelefonoPaciente = fila.insertCell();
let celdaEspecialidad = fila.insertCell();

celdaNombrePaciente .textContent = paciente.nombrePaciente;
celdaApellidoPaciente.textContent = paciente.apellidoPaciente;
celdaCedulaPaciente.textContent = paciente.cedulaPaciente;
celdaEdadPaciente.textContent = paciente.edadPaciente;
celdaTelefonoPaciente.textContent = paciente.telefonoPaciente;
celdaEspecialidad.textContent = paciente.especialidad;

}