import { Component, Inject, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.sass'],
})
export class AbmComponent {
  @ViewChild(MatTable) table: MatTable<any> | undefined;
  constructor(public dataService: DataService, public dialog: MatDialog) {}

  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'email',
    'genero',
    'telefono',
    'matematica',
    'ciencia',
    'biologia',
    'acciones',
  ];
  dataSource = this.dataService.estudiantes;

  openDialog(element?: any) {
    const dialogRef = this.dialog.open(FormDialog, { data: element || null });

    dialogRef.afterClosed().subscribe((result) => {
      this.dataSource = this.dataService.estudiantes;
      this.table && this.table.renderRows();
    });
  }
  delete(element: any) {
    this.dataService.estudiantes = this.dataService.estudiantes.filter(
      (e) => e !== element
    );
    this.dataSource = this.dataService.estudiantes;
    this.table && this.table.renderRows();
  }
}

@Component({
  selector: 'form-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./abm.component.sass'],
})
export class FormDialog {
  form: FormGroup;

  phonePattern = '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$';
  constructor(
    public dataService: DataService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      nombre: [data?.nombre || '', Validators.required],
      apellido: [data?.apellido || '', Validators.required],
      email: [data?.email || '', [Validators.required, Validators.email]],
      genero: [data?.genero || '', Validators.required],
      telefono: [
        data?.telefono || '',
        [Validators.required, Validators.pattern(this.phonePattern)],
      ],
      matematica: [data?.matematica || '', Validators.required],
      ciencia: [data?.ciencia || '', Validators.required],
      biologia: [data?.biologia || '', Validators.required],
    });
  }

  ngOnInit() {}

  handleSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      if (!this.data) {
        this.dataService.estudiantes.push(this.form.value);
        this.form.reset();
        this.dialog.closeAll();
      } else {
        this.dataService.estudiantes = this.dataService.estudiantes.map((e) => {
          if (e === this.data) {
            return this.form.value;
          }
          return e;
        });
        this.dialog.closeAll();
      }
    }
  }
}
