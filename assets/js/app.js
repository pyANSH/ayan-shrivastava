var checkbox = document.querySelector('input[name=theme]')
var mode = localStorage.getItem('mode')

if (mode == 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
    checkbox.checked = true
}

checkbox.addEventListener('change', function () {
    if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('mode', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('mode', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}
