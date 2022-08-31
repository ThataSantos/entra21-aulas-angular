import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-diretiva-for',
  templateUrl: './diretiva-for.component.html',
  styleUrls: ['./diretiva-for.component.css'],
})
export class DiretivaForComponent implements OnInit {
  alunos: Array<string> = new Array();
  nome!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(
      'Recebi',
      JSON.parse(String(this.route.snapshot.paramMap.get('lista')))
    );

    this.alunos = JSON.parse(String(this.route.snapshot.paramMap.get('lista')));
  }
  deletar(index: number) {
    this.alunos.splice(index, 1);
  }
  adicionar() {
    if (this.nome) {
      this.alunos.push(this.nome);
      this.nome = '';
    }
  }
}
