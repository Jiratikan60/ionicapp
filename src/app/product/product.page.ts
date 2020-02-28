import { Component, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  titleName: string
  productName: string
  buttonName: string
  buttoncancleName: string

  constructor(public alertController: AlertController) { }

  ngOnInit() {
    this.titleName = 'รายการอาหาร';
    this.productName = 'ราดหน้า';
    this.buttonName = 'ราคา';

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'ราดหน้า',
      subHeader: 'ราคาสินค้า',
      message: 'ราคา 40 บาท',
      buttons: ['OK']
    })
    await alert.present();
  }
  async cancelAlert() {
    const alert = await this.alertController.create({
      message: 'ยกเลิกรายการอาหาร',
      buttons: ['OK']
    })
    await alert.present();
  }
}
