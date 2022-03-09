import { Component, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent, DxFileUploaderComponent } from 'devextreme-angular';
import { ConsultasapiService } from '../../shared/services/consultasapi.service';
//import { Dialogo, eDialogoBotones, eDialogoIcono, eDialogoResultado } from '../../shared/Dialogo';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  @ViewChild(DxFormComponent) formMain: DxFormComponent;
  @ViewChild(DxFileUploaderComponent) file: DxFileUploaderComponent;
  dataSource: any;
  dataSourceEdito: any;
  dataSourceAuto: any;

  entidad: {
    idLibro?: any,
  };
  constructor(private Consultas: ConsultasapiService) { }

  ngOnInit() {
    this.iniciarRegistro();
    this.DataSource();
  }
  btnAgregar_Click = (e) => {
    if (this.formMain.instance.validate().isValid) {
      this.dataSource= null;
    let vSuscrip = this.Consultas.get("/Libreria/GetLibro",this.entidad.idLibro)
    .subscribe(resp => {
      this.dataSource = resp;
      vSuscrip.unsubscribe();
    },
      error => {
        console.log(error);
        vSuscrip.unsubscribe();
      });
      this.iniciarRegistro();
    }
  }
  iniciarRegistro() {
    this.entidad = {
      idLibro: 0,
    }
    if(this.file)
      this.file.instance.option("value", []);
  }
  DataSource(){
    this.dataSource= null;
    this.dataSourceAuto= null;
    let vSuscrip = this.Consultas.get("/Libreria/ListaLibro","")
    .subscribe(resp => {
      this.dataSource = resp;
      vSuscrip.unsubscribe();
    },
      error => {
        console.log(error);
        vSuscrip.unsubscribe();
      });
      let vSuscripEdi = this.Consultas.get("/Libreria/ListaEditorial","")
      .subscribe(resp => {
        this.dataSourceEdito = resp;
        vSuscripEdi.unsubscribe();
      },
        error => {
          console.log(error);
          vSuscripEdi.unsubscribe();
        });
        let vSuscripAut = this.Consultas.get("/Libreria/ListaAutor","")
        .subscribe(resp => {
          this.dataSourceAuto = resp;
          vSuscripAut.unsubscribe();
        },
          error => {
            console.log(error);
            vSuscripAut.unsubscribe();
          });
  }

  btnlimpiar=(e)=>{
    this.DataSource();
  }
}


