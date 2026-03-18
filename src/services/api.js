let port = "8080" /*Es una variable llamada "port", la cual sirve para guardar el puerto desde donde correra el servidor (8080)*/
const URL_BASE = "localhost:"+ port +"/" /*Construyendo la URL BASE del servidor*/

 export let end_points = {  /*Sirve para guardar todas las rutas de la api en un solo lugar*/
    users: URL_BASE + "users/", /*Construyendo la ruta para usuarios*/
    merchants: URL_BASE  + "merchants/", /*Construyendo la ruta para los comerciantes*/
    expenses: URL_BASE + "expenses/", /*Contruyendo la ruta para los gastos*/
    payment_methods: URL_BASE + "payment_methods/", /*Construyendo la ruta para metodos de pago*/
    category: URL_BASE + "category/" /*Construyendo la ruta para categoria*/
 }