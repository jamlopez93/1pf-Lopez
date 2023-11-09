import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class loginComponent {
  constructor(public dataService: DataService) {}

  displayedColumns: string[] = [
    'nombre',
    'email',
    'genero',
    'telefono',
    'matematica',
    'ciencia',
    'biologia',
  ];
  dataSource = this.dataService.estudiantes;
}
