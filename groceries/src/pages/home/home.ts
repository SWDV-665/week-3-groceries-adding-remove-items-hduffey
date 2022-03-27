import { Component } from '@angular/core';
import { P } from '@angular/core/src/render3';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  title = "Grocery List!";

  items = [
    {
      name: "Bread",
      qty: 2
    }, 
    {
      name: "Milk",
      qty: 1
    }, 
    {
      name: "Trash Bags",
      qty: 32
    }, 
    {
      name: "Cheese",
      qty: 3
    }, 
  ]

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  removeItem(item, index) {
    console.log("Removing item... ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Item... '+ index + "....",
      duration: 3000
    });
    toast.present();

    this.items.splice(index,1);
  }

  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
  }

  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Please enter item....",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name:"qty",
          placeholder: "Quantity"
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Save Clicked', item);
            this.items.push(item);
          }
        }
      ]
    });
    prompt.present();
  }

}
