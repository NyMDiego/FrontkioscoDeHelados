import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronPrincipalComponent } from './jumbotron-principal/jumbotron-principal.component';



@NgModule({
  declarations: [
    NavbarComponent, 
    FooterComponent,
    JumbotronPrincipalComponent
  ],
  exports: [
    NavbarComponent, 
    FooterComponent,
    JumbotronPrincipalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
