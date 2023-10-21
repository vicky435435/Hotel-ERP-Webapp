import { Component } from '@angular/core';
import { Hotels } from '../hotels';
import { HotelService } from '../hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hotels',
  templateUrl: './add-hotels.component.html',
  styleUrls: ['./add-hotels.component.css']
})
export class AddHotelsComponent {

  hotelsRecords:Hotels = {
    id:0,
    name: '',
    owner:'',
    mobile :'',
    email:'',
    location:''
  }

  constructor(private HotelServices:HotelService, private router:Router){

  }

  addHotels(){
    this.HotelServices.createHotels(this.hotelsRecords).subscribe((data)=>{
     this.router.navigate(["/"])
    })
  }

}
