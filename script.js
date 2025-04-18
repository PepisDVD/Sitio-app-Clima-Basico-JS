//Extraemos la key del API desde la web
let url_base = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey = 'd7a2e403d369569a8945a60a1106246e';
//let ciudad = 'Córdova'
let difKelvin = 273.35;

//Le agregamos un evento de Listener al botón:
document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value 
    if(ciudad){
        fetchDatosClima(ciudad)
    }

});

function fetchDatosClima(ciudad){
    //Recordar que como se está usando ' para la cadena de apiKey, usamos ` `.
    fetch(`${url_base}?q=${ciudad}&appid=${apiKey}`)
    .then(data => data.json()) //Los datos lo trae en un formato estándar, así que para poder usarlos mejor lo transformamos a JSON
    .then(data => mostrarDatosClima(data)); //Acá ya podemos hacer lo que queramos con los datos en que traigamos
}

function mostrarDatosClima(data){
    
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    //Utilizamos los datos en formato JSON (clave: valor):
    const ciudadNombre = data.name 
    const temperatura = data.main.temp 
    const descripcion = data.weather[0].description

    //Creamos el contenido en HTML
    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es ${Math.floor(temperatura-difKelvin)}°C`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`

    //Ahora debemos meterlo en el div
    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)

}







