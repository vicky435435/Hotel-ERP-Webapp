import { Component, Inject, OnInit, inject } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HotelService } from '../hotel.service';
@Component({
  selector: 'app-delete-hotels',
  templateUrl: './delete-hotels.component.html',
  styleUrls: ['./delete-hotels.component.css']
})
export class DeleteHotelsComponent implements OnInit{
 
  constructor(public dialogRef: MatDialogRef<DeleteHotelsComponent>, private hotelServices:HotelService, @Inject(MAT_DIALOG_DATA) public data:any){

  }
 

  confrimDelete(){
    this.hotelServices.deleteHotels(this.data.id).subscribe(()=>{
      this.dialogRef.close(this.data.id)
    })
  }

  ngOnInit(): void {
  
  }

  
}
