import { Cuadernillo } from "./cuadernillo"

export interface Pedido {
    cliente:string,
    cuadernillos:Cuadernillo[];
    fechaPedido:string,
    fechaEntrega:string,
    seña:string,
    total:string
}
