import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../apidata.service';
import { Ichicken } from '../ichicken';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent   implements OnInit{

  constructor( private _ApidataService:ApidataService ){}

   datapath:string='https://image.tmdb.org/t/p/w500'

   mealeschicken:Ichicken[]=[]


ngOnInit(): void {
    this._ApidataService.getapidata().subscribe({
      next:(res)=>{
      this.mealeschicken=res.recipes;
      },
      error:(err)=>{
           console.log(err)
      }
    })
}



}
