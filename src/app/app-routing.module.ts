import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [
  {
    path: '',
    component: MenuNavComponent,
    children: [
      {
        path: '',
        component: ProdutosComponent,
      },
      {
      path: 'registro',
      component: RegistroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
