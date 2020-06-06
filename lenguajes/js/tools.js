
/**
 * Funcion que renderiza ...
 * @param {*} id 
 * @param {*} text 
 */
export function render(id = '', text= '') {
    document.querySelector(`#${id}`).innerHTML = text
}