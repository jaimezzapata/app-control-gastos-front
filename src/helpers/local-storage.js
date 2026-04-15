//CREAR, CONSULTAR O ELIMINAR
export function saveLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value))
}
export function getLocalStorage(key){
    let data = JSON.parse(localStorage.getItem(key))
    return
}
export function removeLocalStorage(key){
    localStorage.removeItem(key)
}