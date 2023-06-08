let tablaPacientes= document.getElementById("tabla-pacientes")
let cuerpoTabla= tablaPacientes.querySelector("tbody");

//Arreglos pacientes
let nombrePaciente =["Ana","Andres","Sergio","Melisa"]
let apellidoPaciente =  ["Garcia","Rodriguez","Torres","Martinez"]
let cedulaPaciente= ["1987654320","1234577890","9765432","1234567890"]
let edadPaciente  =["23 años", "30 años","32 años","28 años"]
let telefonoPaciente=["3196391982","3204105699","3202345674","31367588"]
let especialidad=["Radiologia", "Medicina General","Odontologia","Medicina interna"]


for (let i=0; i < nombrePaciente.length; i++){
    let fila = cuerpoTabla.insertRow();
    let celdaNombrePaciente = fila.insertCell();
    let celdaApellidoPaciente = fila.insertCell();
    let celdaCedulaPaciente = fila.insertCell();
    let celdaEdadPaciente = fila.insertCell();
    let celdaTelefonoPaciente = fila.insertCell();
    let celdaEspecialidad = fila.insertCell();

    celdaNombrePaciente.textContent = nombrePaciente[i];
celdaApellidoPaciente.textContent = apellidoPaciente[i];
celdaCedulaPaciente.textContent = cedulaPaciente[i];
celdaEdadPaciente.textContent = edadPaciente[i];
celdaTelefonoPaciente.textContent = telefonoPaciente[i];
celdaEspecialidad.textContent = especialidad[i];
}