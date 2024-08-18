import { Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Gallerycomponent } from './gallery/gallery.component';

export const routes: Routes = [
    {path:'', redirectTo:"home", pathMatch:'full' },
    {path:'home',component:HomeComponent , title:'home'},
    {path:'about',component:AboutComponent , title:'about'},
      {path:'contact',component:ContactComponent,title:'contact'},
   
    { path:'gallery',component:Gallerycomponent ,title:'gallery'  },
 
];
