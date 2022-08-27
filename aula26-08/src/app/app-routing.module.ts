import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { JogosComponent } from './jogos/jogos.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: "login", component: LoginComponent },
{ path: "jogos", component: JogosComponent },
{ path: "cadastro", component: CadastroComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
