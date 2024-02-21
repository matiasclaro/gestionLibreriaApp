import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaCuadernillosComponent } from './pages/lista-cuadernillos/lista-cuadernillos.component';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';
import { ListaPedidosComponent } from './pages/lista-pedidos/lista-pedidos.component';
import { NuevoClienteComponent } from './pages/nuevo-cliente/nuevo-cliente.component';
import { NuevoCuadernilloComponent } from './pages/nuevo-cuadernillo/nuevo-cuadernillo.component';
import { NuevoPedidoComponent } from './pages/nuevo-pedido/nuevo-pedido.component';
import { PruebaComponent } from './pages/prueba/prueba.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'lista-cuadernillos', component:ListaCuadernillosComponent},
    {path:'lista-clientes', component:ListaClientesComponent},
    {path:'lista-pedidos', component:ListaPedidosComponent},
    {path:'nuevo-cliente', component:NuevoClienteComponent},
    {path:'nuevo-cuadernillo', component:NuevoCuadernilloComponent},
    {path:'nuevo-cuadernillo/:id', component:NuevoCuadernilloComponent},
    {path:'nuevo-pedido', component:NuevoPedidoComponent},
    {path:'prueba', component:PruebaComponent},
    {path:'**', redirectTo:'',pathMatch:'full'},
];
