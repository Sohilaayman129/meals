import { Component, OnInit } from '@angular/core';
import { OutdataService } from '../outdata.service';
import { Iinformation } from '../iinformation';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {

  constructor(private _OutdataService:OutdataService ){ }



informations:Iinformation[]=[]

ngOnInit(): void {
    this._OutdataService.getdata().subscribe({
      next:(res)=>{
      this.informations=res.recipes
      },
      error:(error)=>{
   console.log(error)
      }
    })
}





}






