import { Component, OnInit } from '@angular/core';
import { MealsService } from '../meals.service';
import { Imeals } from '../imeals';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class Gallerycomponent implements OnInit {


constructor(private _MealsService:MealsService ){}

meals:Imeals[]=[]


ngOnInit(): void {
    this._MealsService.getmeals().subscribe({
      next:(res)=>{
        this.meals=res.recipes
      },
      error:(err)=>{
  console.log(err)
      }
    })
}



}
