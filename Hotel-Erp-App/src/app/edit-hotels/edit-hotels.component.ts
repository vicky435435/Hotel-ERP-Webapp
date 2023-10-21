import { Component, OnInit } from '@angular/core';
import { Hotels } from '../hotels';
import { HotelService } from '../hotel.service';
import { ActivatedRoute,  Router } from '@angular/router';


@Component({
  selector: 'app-edit-hotels',
  templateUrl: './edit-hotels.component.html',
  styleUrls: ['./edit-hotels.component.css']
})
export class EditHotelsComponent implements OnInit{

  hotelsRecords:Hotels = {
    id:0,
    name: '',
    owner:'',
    mobile :'',
    email:'',
    location:''
  }

  constructor(private hotelService:HotelService, private route:ActivatedRoute, private router:Router){

  }

  ngOnInit(): void {
   this.route.paramMap.subscribe((params)=>{
    let id = Number(params.get('id'))
    this.getById(id)
   })
  }

  getById(id:number){
    this.hotelService.getbyId(id).subscribe((data)=>{
      this.hotelsRecords = data;
    })
  }

  updateHotels(){
    this.hotelService.updateHotels(this.hotelsRecords).subscribe(()=>{
      this.router.navigate(['/']);
    })
  }




}
