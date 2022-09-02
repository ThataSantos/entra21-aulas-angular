import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginaComponent } from './criar-componentes/pagina/pagina.component';
import { OutroComponent } from './criar-componentes/outro/outro.component';
import { PropertyComponent } from './binding/property/property.component';
import { EventComponent } from './binding/event/event.component';
import { FormsModule } from '@angular/forms';
import { MaoDuplaComponent } from './binding/mao-dupla/mao-dupla.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ReceberDadosComponent } from './rotas/receber-dados/receber-dados.component';
import { EnviarComponent } from './rotas/enviar/enviar.component';
import { DiretivaIfComponent } from './diretivas/diretiva-if/diretiva-if.component';
import { DiretivaForComponent } from './diretivas/diretiva-for/diretiva-for.component';
import { LoginComponent } from './login/login.component';
import { DiretivasModule } from './diretivas/diretivas.module';
import { BindingModule } from './binding/binding.module';
import { RotasModule } from './rotas/rotas.module';
import { CriarComponentesModule } from './criar-componentes/criar-componentes.module';
import{HttpClientModule} from '@angular/common/http';
import { ConsumindoApiComponent } from './consumindo-api/consumindo-api.component'


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    MenuComponent,
    LoginComponent,
    ConsumindoApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DiretivasModule,
    BindingModule,
    RotasModule,
    CriarComponentesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
