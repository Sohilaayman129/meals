import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallerycomponent } from './gallery.component';

describe('GalleryComponent', () => {
  let component: Gallerycomponent;
  let fixture: ComponentFixture<Gallerycomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gallerycomponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Gallerycomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
