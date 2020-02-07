import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  // การนำข้อมูลจาก Database มาใช้
  name: string;
  lastname: string;
  detail: string;

  constructor() { }

  ngOnInit() {

    // การนำข้อมูลจาก Database มาใช้
    axios.get('http://localhost/ionicserver/get_profile.php').then((response) => {

      // handle success
      console.log(response.data);

      this.name = response.data[1].name;
      this.lastname = response.data[1].lastname;
      this.detail = response.data[1].detail;

    })
      .catch((error) => {

        // handel error
        console.log(error);
      })
      .then(() => {
        // alway executed
      });
  }

}