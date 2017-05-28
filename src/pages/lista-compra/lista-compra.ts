import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ToastController } from 'ionic-angular';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'lista-compra',
  templateUrl: 'lista-compra.html'
})

export class ListaCompra {
  lista: FirebaseListObservable<any>;
  ref: FirebaseObjectObservable<any>;


  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public toastCtrl: ToastController) {
    this.lista = this.db.list('/compras');
  }
  editar(id) {
    console.log(id);
  }
  adicionarItem(event, compra) {
    this.ref = this.db.object('/compras/' + compra.$key);
    compra.adicionado = !compra.adicionado;
    let mensagem = "";
    if(compra.adicionado){
      mensagem = "Item adicionado";
    }else{
      mensagem = "Item removido";
    }
    this.ref.update(compra).then(() => {
        let toast = this.toastCtrl.create({
        message: mensagem,
        duration: 3000
      });
      toast.present();
    });    
    
  }

}
