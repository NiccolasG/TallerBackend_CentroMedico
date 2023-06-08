let tablaMedicos= document.getElementById("tabla-Medicos")
let cuerpoTabla= tablaMedicos.querySelector("tbody");

//objetos
let medicos = [
{
nombreMedico:"Daniel",
apellidoMedico :"Benavides",
cedulaMedico: "101837645",
especialidad: "Medicina genral",
consultorioMedico: "302",
correoContacto:"xxxxx@gmail.com",
pacientes: "Luna"
},
{
nombreMedico:"Ana",
apellidoMedico :"Garcia",
cedulaMedico: "345678945",
especialidad: "Medicina General",
consultorioMedico: "304",
correoContacto:"xxxxx@outlook.com",
pacientes: "Orion"
},
{
    nombreMedico:"Daniel",
    apellidoMedico :"Alvarez",
    cedulaMedico: "4567895",
    especialidad: "Medicina Interna",
    consultorioMedico: "303",
    correoContacto:"xxxxx@yahoo.com",
    pacientes: "maily"
},
{
    nombreMedico:"Nicolas",
    apellidoMedico :"Arvelaez",
    cedulaMedico: "54563445",
    especialidad: "Urologia",
    consultorioMedico: "305",
    correoContacto:"xxxxx@hotmail.com",
    pacientes: "Mystic"
}
]


for (let i = 0; i < medicos.length; i++ ){
let medico = medicos[i];

let fila = cuerpoTabla.insertRow();
    let celdaNombreMedico = fila.insertCell();
    let celdaApellidoMedico = fila.insertCell();
    let celdaCedulaMedico = fila.insertCell();
    let celdaEspecialidad = fila.insertCell();
    let celdaConsultorioMedico = fila.insertCell();
    let celdaCorreoContacto = fila.insertCell();
    let celdaPacientes= fila.insertCell();

    celdaNombreMedico.textContent = medico.nombreMedico;
    celdaApellidoMedico.textContent = medico.apellidoMedico;
    celdaCedulaMedico.textContent = medico.cedulaMedico;
    celdaEspecialidad.textContent = medico.especialidad;
    celdaConsultorioMedico.textContent = medico.consultorioMedico;
    celdaCorreoContacto.textContent = medico.correoContacto;
    celdaPacientes.textContent = medico.pacientes;

}
//revisar lo de los consultorios bn 