const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const massages = [
    'Massage One',
    'Massage Two',
    'Massage Three',
    'Massage Four',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification('Invalid Password or Username'))

function createNotification(massage = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = massage ? massage: getRandomMassage  ()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMassage () {
    return massages[Math.floor(Math.random() * massages.length)]

}

function getRandomType () {
    return types[Math.floor(Math.random() * types.length)]

}