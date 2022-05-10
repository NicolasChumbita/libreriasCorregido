function bienvenida() {
    Swal.fire({
        title: "Bienvenidos a Compañia de SEGUROS CHUMBITA",
        text: "A continuación encontrarás todas nuestras propuestas",
        confirmButtonText: "Continuar"
    })
}

let cotizador = document.querySelector('#cotizador')
let cotizadorAnio = document.querySelector('#cotizadorAnio')
let cotizadorModelo = document.querySelector('#cotizadorModelo')
let cotizadorVersion = document.querySelector('#cotizadorVersion')
let cotizadorProvincia = document.querySelector('#cotizadorProvincia')
let cotizadorCiudad = document.querySelector('#cotizadorCiudad')
let btnCotizar = document.querySelector('#btnCotizar')
let arrayAutos = []
let compuestoSeguro = []
let infoSeguro = document.querySelector('#infoSeguro')
class autos {
    constructor(marca, anio, modelo, version, provincia, ciudad) {
        this.marca = marca
        this.anio = anio
        this.modelo = modelo
        this.version = version
        this.provincia = provincia
        this.ciudad = ciudad
    }

    tipoSeguro() {
        const datos = {
            marcaValor: '',
            anioValor: '',
            modeloValor: '',
            provValor: '',
            cobertura: '',

        }
        if (this.marca === "chevrolet" || this.marca === "ford") {
            compuestoSeguro.push(40000)
            datos.marcaValor = 40000
        } else {
            compuestoSeguro.push(25000)
            datos.marcaValor = 25000
        }

        if (this.anio <= 2003) {
            compuestoSeguro.push(5000)
            datos.anioValor = 5000
        } else if (this.anio > 2003 && this.anio <= 2009) {
            compuestoSeguro.push(8000)
            datos.anioValor = 8000
        } else if (this.anio > 2009 && this.anio <= 2016) {
            compuestoSeguro.push(12000)
            datos.anioValor = 12000
        } else if (this.anio > 2016 && this.anio <= 2022) {
            compuestoSeguro.push(20000)
            datos.anioValor = 20000
        }

        if (this.modelo === "hilux" || this.modelo === "s10" || this.modelo === "focus" || this.modelo === "vento" || this.modelo === "cruze") {
            compuestoSeguro.push(15000)
            datos.modeloValor = 15000
        } else {
            datos.modeloValor = "n/a"
        }

        if (this.provincia === "cordoba" || this.provincia === "misiones") {
            compuestoSeguro.push(2000)
            datos.provValor = 2000
        } else {
            datos.provValor = "n/a"
        }

        let totalSeguro = compuestoSeguro.reduce((a, b) => a + b, 0);
        let cuotasSeguro = Math.round(totalSeguro / 12)
        if (totalSeguro <= 25000) {
            datos.cobertura = "Seguro contra Daños Totales"
        } else if (totalSeguro > 25000 && totalSeguro <= 30000) {
            datos.cobertura = "Contra terceros parcial"
        } else if (totalSeguro > 30000 && totalSeguro <= 40000) {
            datos.cobertura = "Contra terceros total"
        } else if (totalSeguro > 40000) {
            datos.cobertura = "Contra todo riesgo con franquicia"
        }

        infoSeguro.innerHTML = (`
            <p>Marca ${this.marca} - ${datos.marcaValor}</p>
            <p>Año ${this.anio} - ${datos.anioValor}</p>
            <p>Modelo ${this.modelo} - ${datos.modeloValor}</p>
            <p>Version ${this.version}</p>
            <p>Provincia ${this.provincia} - ${datos.provValor}</p>
            <p>Ciudad ${this.ciudad}</p>
            <p>Tu seguro va a cubrir ${totalSeguro}, las cuotas son de ${cuotasSeguro} y tu seguro es ${datos.cobertura}</p>
        `)

        setTimeout(() => {
            infoSeguro.innerHTML = ""
        }, 12000);

    }
}

const obj = {
    marca: '',
    anio: '',
    modelo: '',
    version: '',
    provincia: '',
    ciudad: ''
}


cotizador.addEventListener('input', (e) => {
    obj.marca = e.target.value
    Toastify({
        text: "Has agregado un item",
        duration: 2000,
        gravity: "bottom",
        position: "right",
        style: {
            background: "linear-gradient(62deg, #f51906 0%, #ff9300 100%)",
        }
    }).showToast();
    console.log(obj)
})

cotizadorAnio.addEventListener('change', (e) => {
    obj.anio = e.target.value
    Toastify({
        text: "Has agregado un item",
        duration: 2000,
        gravity: "bottom",
        position: "right",
        style: {
            background: "linear-gradient(62deg, #f51906 0%, #ff9300 100%)",
        }
    }).showToast();
    console.log(obj)
})

cotizadorModelo.addEventListener('change', (e) => {
    obj.modelo = (e.target.value).toLowerCase()
    Toastify({
        text: "Has agregado un item",
        duration: 2000,
        gravity: "bottom",
        position: "right",
        style: {
            background: "linear-gradient(62deg, #f51906 0%, #ff9300 100%)",
        }
    }).showToast();
    console.log(obj)
})
cotizadorVersion.addEventListener('change', (e) => {
    obj.version = e.target.value
    Toastify({
        text: "Has agregado un item",
        duration: 2000,
        gravity: "bottom",
        position: "right",
        style: {
            background: "linear-gradient(62deg, #f51906 0%, #ff9300 100%)",
        }
    }).showToast();
    console.log(obj)
})
cotizadorProvincia.addEventListener('change', (e) => {
    obj.provincia = (e.target.value).toLowerCase()
    Toastify({
        text: "Has agregado un item",
        duration: 2000,
        gravity: "bottom",
        position: "right",
        style: {
            background: "linear-gradient(62deg, #f51906 0%, #ff9300 100%)",
        }
    }).showToast();
    console.log(obj)
})
cotizadorCiudad.addEventListener('change', (e) => {
    obj.ciudad = e.target.value
    console.log(obj)
})


btnCotizar.addEventListener('click', (e) => {
    e.preventDefault()
    const { marca, anio, modelo, version, provincia, ciudad } = obj
    if (marca === '' || anio === '' || modelo === '' || version === '' || provincia === '' || ciudad === '') {
        alert('Todos los campos deben estar completos')
        return
    } else {
        arrayAutos.push(new autos(marca, anio, modelo, version, provincia, ciudad))
        cuotaSeguro(arrayAutos)
        obj.marca = ''
        obj.anio = ''
        obj.modelo = ''
        obj.version = ''
        obj.provincia = ''
        obj.ciudad = ''
        formulario.reset()
        arrayAutos = []
    }

})


function cuotaSeguro(auto) {
    compuestoSeguro = []
    auto[0].tipoSeguro()

}


bienvenida();