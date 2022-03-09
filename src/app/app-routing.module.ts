import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/services';
import { CommonModule } from '@angular/common';  
import { DxDataGridModule, DxFormModule, DxDropDownBoxModule  ,DxSelectBoxModule, DxNumberBoxModule, DxDateBoxModule, DxPopupModule ,DxFileUploaderModule} from 'devextreme-angular';
import { ClientesComponent } from './pages/clientes/clientes.component';

const routes: Routes = [
  {
    path: 'clientes',
    component: ClientesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule, DxFileUploaderModule, DxDropDownBoxModule, CommonModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [  ClientesComponent ]

})
export class AppRoutingModule { }
