import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { CompraPage } from '../pages/compra/compra';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ListaCompra} from '../pages/lista-compra/lista-compra'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseConfig = {
   apiKey: "AIzaSyBgRBhnAcBRXMHfBVkU6TeHDpGbc4Tp89Q",
    authDomain: "compras-app.firebaseapp.com",
    databaseURL: "https://compras-app.firebaseio.com",
    projectId: "compras-app",
    storageBucket: "compras-app.appspot.com",
    messagingSenderId: "770639872559"
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CompraPage,
    HomePage,
    TabsPage,
    ListaCompra
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CompraPage,
    HomePage,
    TabsPage,
    ListaCompra
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
