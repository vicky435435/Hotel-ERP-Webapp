import { Component, OnInit } from '@angular/core';
import { Hotels } from '../hotels';
import { HotelService } from '../hotel.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteHotelsComponent } from '../delete-hotels/delete-hotels.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allHotelstore:Hotels[]= [];

  displayedColumns: string[] = ['id', 'name', 'owner', 'mobile','email','location', 'action'];

  constructor(private hotelService:HotelService, public dialog:MatDialog) { }

  ngOnInit(): void {
     this.getAllHotels()
  }

  getAllHotels(){
    this.hotelService.getAll().subscribe((data)=>{
      this.allHotelstore = data;
      console.log(this.allHotelstore)
    })
  }
   

  openDeleteModel(id: number){
  const deleteConfim = this.dialog.open(DeleteHotelsComponent,{
      width: '450px',
      data: {id}
    });
    deleteConfim.afterClosed().subscribe((result)=>{
      if(result){
        this.allHotelstore = this.allHotelstore.filter((_)=>_.id !==id);
      }
    })
  }
  

}

 


