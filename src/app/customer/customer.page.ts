import { Component, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";
import axios from 'axios'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  c_id: string;
  c_name: string;
  c_lastname: string;
  c_address: string;
  c_tel: string;

  inputc_id: string;
  inputc_name: string;
  inputc_lastname: string;
  inputc_address: string;
  inputc_tel: string;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
    axios.get('http://localhost/ionicserver/add_customers.php').then((response) => {
      //handle success
      console.log(response.data);
      this.c_id = response.data[0].c_id;
      this.c_name = response.data[0].c_name;
      this.c_lastname = response.data[0].c_lastname;
      this.c_address = response.data[0].c_address;
      this.c_tel = response.data[0].c_tel ;

    })
    .catch((error) => {
      //handel error
      console.log(error);
    })
    .then(() => {
      //always executed
    });
}

register() {
  console.log('inputc_id: ' + this.inputc_id);
  console.log('inputc_name: ' + this.inputc_name);
  console.log('inputc_lastname: ' + this.inputc_lastname);
  console.log('inputc_address: ' + this.inputc_address);
  console.log('inputc_tel: ' + this.inputc_tel);

  axios.post('http://localhost/ionicserver/get_customers.php', {
    id: this.inputc_id,
    name: this.inputc_name,
    lastname: this.inputc_lastname,
    address: this.inputc_address,
    tel: this.inputc_tel
  }).then((response) => {
    console.log(response);
    
    this.inputc_id = '';
    this.inputc_name = '';
    this.inputc_lastname = '';
    this.inputc_address = '';
    this.inputc_tel = '';

  }).catch((error) => {
    console.log(error);
  });

  }
}
