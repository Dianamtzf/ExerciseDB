const cardExer = document.querySelector('#cardExer').content
const contenido = document.querySelector('#contenido')
const fragment = document.createDocumentFragment()
const btnBuscar = document.getElementById('buscador')
const btnAbdomen = document.getElementById('btnAbdomen')
const btnGluteo = document.getElementById('btnGluteo')
const btnBicep = document.getElementById('btnBicep')
const btnPecho = document.getElementById('btnPecho')
const btnCardio = document.getElementById('btnCardio')
const btnEspalda = document.getElementById('btnEspalda')
const equipSmith = document.getElementById('smith')
const equipCable = document.getElementById('cable')
const equipBall = document.getElementById('ball')
const equipBarra = document.getElementById('barra')
const equipPesa = document.getElementById('mancuerna')

const btnPlan = document.getElementById('plan')
const btnLun = document.getElementById('lun')
const btnMar = document.getElementById('mar')
const btnMier = document.getElementById('mier')
const btnJue = document.getElementById('jue')
const btnVie = document.getElementById('vie')
const lunes = document.querySelector('#lunes').content
const martes = document.querySelector('#martes').content
const miercoles = document.querySelector('#miercoles').content
const jueves = document.querySelector('#jueves').content
const viernes = document.querySelector('#viernes').content

let exerciseDB = []
let exerciseAll = []

document.addEventListener('DOMContentLoaded', () => {
   loadExerciseDB()
})

const loadExerciseDB = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b101d35b5cmsh48335a6e7dc3e57p135720jsnc0237058ea8d',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };
    
    fetch('https://exercisedb.p.rapidapi.com/exercises', options)
        .then(response => response.json())
        .then(response => { //Para guardar la bd en el array
            exerciseDB = response
            exerciseAll = response
            //creaCards(exerciseDB)
            console.log('Ejercicios', exerciseDB)
        }) 
        .catch(err => console.error(err));
}

const creaCards = (exercises) => {
    contenido.innerHTML = ""
    exercises.forEach((exer) => {
        cardExer.querySelector('img').setAttribute('src', exer.gifUrl)
        cardExer.querySelector('.exername').textContent = exer.name
        cardExer.querySelector('.bodypart').textContent = exer.bodyPart + ' / ' + exer.target

        const clone = cardExer.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenido.appendChild(fragment)
}

//Función para buscar por nombre de ejercicio
btnBuscar.addEventListener('keyup', () => {
    let temp = []
    temp = exerciseDB.filter(exer => exer.target.toLowerCase().includes(btnBuscar.value.toLowerCase()))
    creaCards(temp)
}) 

btnAbdomen.addEventListener('click', () => {
    let temp = []
    temp = exerciseDB.filter(exer => exer.target == "abs")
    creaCards(temp)
})

btnGluteo.addEventListener('click', () => {
    let temp = []
    temp = exerciseDB.filter(exer => exer.target == "glutes")
    console.log("Gluteos", temp)
    creaCards(temp)
})

btnBicep.addEventListener('click', () => {
    let temp = []
    temp = exerciseDB.filter(exer => exer.target == "biceps")
    creaCards(temp)
})

btnPecho.addEventListener('click', () => {
    let temp = []
    temp = exerciseDB.filter(exer => exer.target == "pectorals")
    creaCards(temp)
})

btnCardio.addEventListener('click', () => {
    let temp = []
    temp = exerciseDB.filter(exer => exer.target == "cardiovascular system")
    creaCards(temp)
})

btnEspalda.addEventListener('click', () => {
    let temp = []
    temp = exerciseDB.filter(exer => exer.target == "upper back")
    creaCards(temp)
})

equipBall.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b101d35b5cmsh48335a6e7dc3e57p135720jsnc0237058ea8d',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };
    
    fetch('https://exercisedb.p.rapidapi.com/exercises/equipment/stability%20ball', options)
        .then(response => response.json())
        .then(response => {
            exerciseAll = []
            exerciseAll = response
            creaCards(exerciseAll)
        })
        .catch(err => console.error(err));
})

equipCable.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b101d35b5cmsh48335a6e7dc3e57p135720jsnc0237058ea8d',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };
    
    fetch('https://exercisedb.p.rapidapi.com/exercises/equipment/cable', options)
        .then(response => response.json())
        .then(response => {
            exerciseAll = []
            exerciseAll = response
            creaCards(exerciseAll)
        })
        .catch(err => console.error(err));
})

equipBarra.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b101d35b5cmsh48335a6e7dc3e57p135720jsnc0237058ea8d',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };
    
    fetch('https://exercisedb.p.rapidapi.com/exercises/equipment/barbell', options)
        .then(response => response.json())
        .then(response => {
            exerciseAll = []
            exerciseAll = response
            creaCards(exerciseAll)
        })
        .catch(err => console.error(err));
})

equipPesa.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b101d35b5cmsh48335a6e7dc3e57p135720jsnc0237058ea8d',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };
    
    fetch('https://exercisedb.p.rapidapi.com/exercises/equipment/dumbbell', options)
        .then(response => response.json())
        .then(response => {
            exerciseAll = []
            exerciseAll = response
            creaCards(exerciseAll)
        })
        .catch(err => console.error(err));
})

equipSmith.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b101d35b5cmsh48335a6e7dc3e57p135720jsnc0237058ea8d',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };
    
    fetch('https://exercisedb.p.rapidapi.com/exercises/equipment/smith%20machine', options)
        .then(response => response.json())
        .then(response => {
            exerciseAll = []
            exerciseAll = response
            creaCards(exerciseAll)
        })
        .catch(err => console.error(err));
})

//Planeacion de videos semanales
btnLun.addEventListener('click', () => {
    contenido.innerHTML = ""
    lunes.querySelector('iframe')

    const clone = lunes.cloneNode(true)
     fragment.appendChild(clone)
     contenido.appendChild(fragment)
})
btnMar.addEventListener('click', () => {
    contenido.innerHTML = ""
    martes.querySelector('iframe')

    const clone = martes.cloneNode(true)
     fragment.appendChild(clone)
     contenido.appendChild(fragment)
})
btnMier.addEventListener('click', () => {
    contenido.innerHTML = ""
    miercoles.querySelector('iframe')

    const clone = miercoles.cloneNode(true)
     fragment.appendChild(clone)
     contenido.appendChild(fragment)
})
btnJue.addEventListener('click', () => {
    contenido.innerHTML = ""
    jueves.querySelector('iframe')

    const clone = jueves.cloneNode(true)
     fragment.appendChild(clone)
     contenido.appendChild(fragment)
})
btnVie.addEventListener('click', () => {
    contenido.innerHTML = ""
    viernes.querySelector('iframe')

    const clone = viernes.cloneNode(true)
     fragment.appendChild(clone)
     contenido.appendChild(fragment)
})

