import { Component, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";
import axios from 'axios';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  productid: string;
  productname: string;
  productprice: string;
  productdetail: string;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async addproduct() {

    if (this.productid === undefined) {
      // console.log('กรุณากรอกรหัสสินค้า');

      this.alerterror('กรุณากรอกรหัสสินค้า');

        // const alert = await this.alertController.create({
        //   header: 'คำเตือน',
        //   message: 'กรุณากรอกรหัสสินค้า',
        //   buttons: ['OK']
        // });
        // await alert.present();
     

    } else if (this.productname === undefined) {
      // console.log('กรุณากรอกชื่อสินค้า');

      this.alerterror('กรุณากรอกชื่อสินค้า');
      
      // const alert = await this.alertController.create({
      //   header: 'คำเตือน',
      //   message: 'กกรุณากรอกชื่อสินค้า',
      //   buttons: ['OK']
      // });
      // await alert.present();
   
    } else if (this.productprice === undefined) {
      // console.log('กรุณากรอกราคาสินค้า');

      this.alerterror('กรุณากรอกราคาสินค้า');
      // const alert = await this.alertController.create({
      //   header: 'คำเตือน',
      //   message: 'กรุณากรอกราคาสินค้า',
      //   buttons: ['OK']
      // });
      // await alert.present();
   
    } else if (this.productdetail === undefined) {
      // console.log('กรุณากรอกรายละเอียดราคาสินค้า');

      this.alerterror('กรุณากรอกรายละเอียดสินค้า');
      // const alert = await this.alertController.create({
      //   header: 'คำเตือน',
      //   message: 'กรุณากรอกรายละเอียดราคาสินค้า',
      //   buttons: ['OK']
      // });
      // await alert.present();
     

    } else {
      axios.post('http://localhost/ionicserver/add_product.php', {
        productid: this.productid,
        productname: this.productname,
        productprice: this.productprice,
        productdetail: this.productdetail
      }).then((response) => {
        console.log(response);
        this.productid = undefined;
        this.productname = undefined;
        this.productprice = undefined;
        this.productdetail = undefined;

        this.savesuccess();

      }).catch((error) => {
        console.log(error);
      });
    }

  }
  async savesuccess() {
    const alert = await this.alertController.create({
      header: 'สำเร็จ',
      message: 'บันทึกข้อูลสำเร็จ',
      buttons: ['OK']
    });
    await alert.present();
  }
  async alerterror(data: any) {
    const alert = await this.alertController.create({
      header: 'คำเตือน',
      message: data,
      buttons: ['OK']
    });
    await alert.present();
  }
  
}
  