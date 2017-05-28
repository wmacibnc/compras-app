import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ToastController } from 'ionic-angular';

import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';

import { Compra } from '../entidades/compra-class'


@Component({
  selector: 'compra',
  templateUrl: 'compra.html'
})
export class CompraPage {
  itens: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  lista: FirebaseListObservable<any>;
  compra: Compra;
  ref: FirebaseObjectObservable<any>;

  constructor(public db: AngularFireDatabase,
    public navCtrl: NavController,
    public toastCtrl: ToastController) {

    this.lista = this.db.list('/compras');
    this.compra = new Compra();
  }

  cadastrar() {
    this.compra.adicionado = false;
    this.lista.push(this.compra).then(() => {
      let toast = this.toastCtrl.create({
        message: 'Salvo com sucesso!',
        duration: 3000
      });
      toast.present();
    });
    this.compra.descricao = '';
  }

  excluir($event,compra){
    this.ref = this.db.object('/compras/' + compra.$key);
    this.ref.remove().then(() =>{
    let toast = this.toastCtrl.create({
        message: 'Item excluido!',
        duration: 3000
      });
      toast.present();
    });
  }

}
