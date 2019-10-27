import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from './../services/header.service';
import { GalleryItems } from './../gallery/gallery';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit, OnDestroy {
  galleryImage:[];
  selectedItem;
  id;

  constructor(private header: HeaderService, private gallery: GalleryItems, private activeRout: ActivatedRoute) { }

  ngOnInit() {
    
    this.header.headerNav.next(false);
    this.header.goBackLink.next({text:'Back to Gallery', url:'/gallery'});
    
    this.galleryImage = this.gallery.galleryImages;
    

    this.activeRout.params.subscribe((params: Params)=> {
      this.id = params['id'];
      this.selectedItem = this.gallery.galleryImages[this.id - 1];
    })
  }

  ngOnDestroy(): void {
    this.header.headerNav.next(true);
    this.header.goBackLink.next({text:'', url:''});
  }

}
