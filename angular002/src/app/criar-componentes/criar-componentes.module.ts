import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { PaginaComponent } from './pagina/pagina.component';
import { OutroComponent } from './outro/outro.component';



@NgModule({
  declarations: [PaginaComponent,OutroComponent],
  imports: [
    CommonModule,BrowserModule, AppRoutingModule, FormsModule,ReactiveFormsModule
  ]
})
export class CriarComponentesModule { }
