const formularioPacientes = document.getElementById('registro_pacientes-form')
formularioMascotas.addEventListener('submit', (event) =>{
event.preventDefault();
const datosMascota = {
nombrePaciente: document.getElementById('paciente').value,
apellidoPaciente: document.getElementById('apellido').value,
cedulaPaciente: document.getElementById('cedula').value,
edadPaciente: document.getElementById('edad').value,
telefonoPaciente: document.getElementById('telefono').value,
especialidad: document.getElementById('especialidad').value
}
const jsonDatos = JSON.stringify(datospaciente)


})

function guardarCookies(paciente) {
    //las cookies antiguas
    let datos = obtenerCookie("pacientes");
    if (datos === "") {
    datos = "[]";
    }
    //objeto
    const pacientesObjetos = JSON.parse(datos);
    //añadir nuevas
    pacientesObjetos.push(paciente);
    const jsonDatos = JSON.stringify(pacientesObjetos)
    cambiarCookie("paciente", jsonDatos)
    
    }
    
    function obtenerCookie(nombre) {
    const cookies = document.cookie.split("; ")
    for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === nombre) {
    return decodeURIComponent(cookie[1]);
    }
    }
    return "";
    }
    
    function cambiarCookie(nombre, valor) {
    document.cookie = `${nombre}=${encodeURIComponent(valor)}`;
    }