const formularioMedicos = document.getElementById('registro_medicosCM-form')
formularioMedicos.addEventListener('submit', (event) => {
    event.preventDefault();
    const datosMedico = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        numeroCedula: document.getElementById('cedula').value,
        numeroConsultorio: document.getElementById('consultorio').value,
        correoContacto: document.getElementById('correo').value,
        especialidad: document.getElementById('especialidad').value
    }
    guardarCookies(datosMedico)

})

function guardarCookies(medico) {
    //las cookies antiguas
    let datos = obtenerCookie("medico");
    if (datos === "") {
        datos = "[]";
    }
    //objeto
    const medicosObjetos = JSON.parse(datos);
    //añadir nuevas
    medicosObjetos.push(medico);
    const jsonDatos = JSON.stringify(medicosObjetos)
    cambiarCookie("medicos", jsonDatos)

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