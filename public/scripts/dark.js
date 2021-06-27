const html = document.querySelector("html")
const checkbox = document.querySelector(".switch-dark-mode input")

const getStyle = (element, style) =>
    window.getComputedStyle(element)
        .getPropertyValue(style)

// Paleta de cores light mode
const initialColors = {
    black: getStyle(html, "--black"),
    white: getStyle(html, "--white"),
    red: getStyle(html, "--red"),
    lightBlue: getStyle(html, "--light-blue"),
    blue: getStyle(html, "--blue"),     
    background: getStyle(html, "--background"),
    overlay: getStyle(html, "--overlay"),
    iconsDetails: getStyle(html, "--icons-details"),

    greyDark: getStyle(html, "--grey-dark"),
    greyLight: getStyle(html, "--grey-light"),
    greyMedium: getStyle(html, "--grey-medium"),

    hoverBlue: getStyle(html, "--hover-blue"),
    hoverRed: getStyle(html, "--hover-red"),

    violet: getStyle(html, "--violet")
}

// Paleta de cores dark mode
const darkMode = {
    black: "#FAFAFA",
    white: "#5A5A5E",
    red: "#554346",
    lightBlue: "#868686",
    blue: "#2C2C2A",     
    background: "#5A5A5E",
    overlay: "#FAFAFA",
    iconsDetails: "#343F50",

    greyDark: "#FAFAFA",
    greyLight: "#86898B",
    greyMedium: "#78797A",

    hoverBlue: "#7E8897",
    hoverRed: "#8D7A7D",

    violet: "#4E5172"
}

// Como mudar os cores
const changeMode = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(`--${kebabize(key)}`, colors[key]))
}

// Transformar camel case a kebab case
const kebabize = str => {
    return str.split('').map((letter, idx) => {
      return letter.toUpperCase() === letter
       ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
       : letter;
    }).join('');
}

// Escuta a mudança do checkbox y chama para mudar o modo
checkbox.addEventListener("change", ({target}) => {
    setMode(target.checked)
})

// Checa o modo a aplicar
function setMode(checked){
    checked ? changeMode(darkMode) : changeMode(initialColors)
    localStorage.setItem('state', checked)
}

// Checa se tem um modo salvo para a próxima página e o carrega
function initialMode(){
    // Consultar se tem um modo salvo
    const savedState = localStorage.getItem('state') === "true" ? true : false

    // Mandar a propriedade para o checkbox
    checkbox.checked = savedState

    // Aplicar o modo correto na página
    setMode(savedState)
}

initialMode()