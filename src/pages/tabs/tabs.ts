import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { CompraPage } from '../compra/compra';
import { HomePage } from '../home/home';
import { ListaCompra } from '../lista-compra/lista-compra';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = CompraPage;
  tab4Root = ListaCompra;

  constructor() {

  }
}
