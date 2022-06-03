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
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationService } from './service/registration.service';
import { AuthGdGuard } from './guards/auth-gd.guard';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { RentInvComponent } from './calculadoras/rent-inv/rent-inv.component';
import { RentPouComponent } from './calculadoras/rent-pou/rent-pou.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, canActivate: [AuthGdGuard] },
      {
        path: 'mostrar',
        component: MostrarComponent,
        canActivate: [AuthGdGuard],
      },
      {
        path: 'adicionar',
        component: AdicionarComponent,
        canActivate: [AuthGdGuard],
      },
      {
        path: 'editar',
        component: EditarComponent,
        canActivate: [AuthGdGuard],
      },
      {
        path: 'adicionarreceita',
        component: AdicionarreceitaComponent,
        canActivate: [AuthGdGuard],
      },
      {
        path: 'editarreceita',
        component: EditarreceitaComponent,
        canActivate: [AuthGdGuard],
      },
      {
        path: 'mostrarreceita',
        component: MostrarreceitaComponent,
        canActivate: [AuthGdGuard],
      },
      {
        path: 'calcpg',
        component: CalcpgComponent,
        canActivate: [AuthGdGuard],
      },
      {
        path: 'cotacao',
        component: CotacaoComponent,
        canActivate: [AuthGdGuard],
      },
      {
        path: 'juroscom',
        component: JurosComComponent,
        canActivate: [AuthGdGuard],
      },
      {
        path: 'jurossim',
        component: JurosSimComponent,
        canActivate: [AuthGdGuard],
      },
      {
        path: 'rentinv',
        component: RentInvComponent,
        canActivate: [AuthGdGuard],
      },
      {
        path: 'rentpou',
        component: RentPouComponent,
        canActivate: [AuthGdGuard],
      },
      {
        path: 'relatorio',
        component: RelatorioComponent,
        canActivate: [AuthGdGuard],
      },
      {
        path: 'navbar',
        component: NavbarComponent,
        canActivate: [AuthGdGuard],
      },
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
    RelatorioComponent,
    RentInvComponent,
    RentPouComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    FinancaService,
    AuthGdGuard,
    ChartService,
    CotacaoService,
    RegistrationService,
  ],
})
export class AppModule {}
