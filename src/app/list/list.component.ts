import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent {
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
