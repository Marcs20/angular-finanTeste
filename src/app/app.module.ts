import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { AdicionarComponent } from './despesa/adicionar/adicionar.component';
import { EditarComponent } from './despesa/editar/editar.component';
import { MostrarComponent } from './despesa/mostrar/mostrar.component';
import { FinancaService } from './service/financa.service';
import { ChartService } from './service/chart.service';
import { AdicionarreceitaComponent } from './receita/adicionarreceita/adicionarreceita.component';
import { EditarreceitaComponent } from './receita/editarreceita/editarreceita.component';
import { MostrarreceitaComponent } from './receita/mostrarreceita/mostrarreceita.component';
import { CalcpgComponent } from './calcpg/calcpg.component';
import { CotacaoComponent } from './cotacao/cotacao.component';
import { JurosComComponent } from './calculadoras/juros-com/juros-com.component';
import { JurosSimComponent } from './calculadoras/juros-sim/juros-sim.component';
import { CotacaoService } from './service/cotacao.service';
import { SaldoService } from './service/saldo.service';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationService } from './service/registration.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'mostrar', component: MostrarComponent },
      { path: 'adicionar', component: AdicionarComponent },
      { path: 'editar', component: EditarComponent },
      { path: 'adicionarreceita', component: AdicionarreceitaComponent },
      { path: 'editarreceita', component: EditarreceitaComponent },
      { path: 'mostrarreceita', component: MostrarreceitaComponent },
      { path: 'calcpg', component: CalcpgComponent },
      { path: 'cotacao', component: CotacaoComponent },
      { path: 'juroscom', component: JurosComComponent },
      { path: 'jurossim', component: JurosSimComponent },
      { path: '', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MostrarComponent,
    HomeComponent,
    AdicionarComponent,
    NavbarComponent,
    EditarComponent,
    AdicionarreceitaComponent,
    EditarreceitaComponent,
    MostrarreceitaComponent,
    CalcpgComponent,
    CotacaoComponent,
    JurosComComponent,
    JurosSimComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    FinancaService,
    ChartService,
    CotacaoService,
    SaldoService,
    RegistrationService,
  ],
})
export class AppModule {}
