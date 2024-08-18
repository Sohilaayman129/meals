import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OutdataService } from '../outdata.service';
import { MealsfishhhService } from '../mealsfishhh.service';
import { Ifish } from '../ifish';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[OutdataService]
})
export class HomeComponent  implements OnInit{


constructor(private _MealsfishhhService:MealsfishhhService){}


mealsfish:Ifish[]=[]

ngOnInit(): void {
    this._MealsfishhhService.getfish().subscribe({
      next:(res)=>{
       this.mealsfish=res.recipes
      },
      error:(err)=>{
       console.log(err)
      }
    })
}

}

