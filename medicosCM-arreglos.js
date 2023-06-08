let tablaMedicos= document.getElementById("tabla-Medicos")
let cuerpoTabla= tablaMedicos.querySelector("tbody");

//Arreglos medicos
let nombreMedico =["Camilo","Lina","Maria","Daniel"]
let apellidoMedico =["Ramirez", "Garcia", "Perez","Contreras"]
let cedulaMedico =["10123456","1123467", "12345674","1234566789"]
let especialidadMedica = ["medicina interna","Psicologia","Dermatologia","Cardiologia"]
let consultorio =["302", "301", "303", "309"]
let correo =["xxxxx@gmail.com", "xxxxx@outlook.com", "xxxxx@yahoo.com","xxxx@outlook"]

    for (let i=0; i < nombreMedico.length; i++){
    let fila = cuerpoTabla.insertRow();
    let celdaNombreMedico = fila.insertCell();
    let celdaApellidoMedico = fila.insertCell();
    let celdaCedulaMedico = fila.insertCell();
    let celdaEspecialidadMedica= fila.insertCell();
    let celdaConsultorio = fila.insertCell();
    let celdaCorreo= fila.insertCell();

    celdaNombreMedico.textContent = nombreMedico[i];
    celdaApellidoMedico.textContent = apellidoMedico[i];
    celdaCedulaMedico.textContent = cedulaMedico[i];
    celdaEspecialidadMedica.textContent = especialidadMedica[i];
    celdaConsultorio.textContent = consultorio[i];
    celdaCorreo.textContent = correo[i];
}

