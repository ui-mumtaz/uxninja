import { Component, OnInit } from '@angular/core';
import { GalleryItems } from './gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryImages:[];

  constructor(private gallery: GalleryItems) { }

  ngOnInit() {
    this.galleryImages = this.gallery.galleryImages
  }

}
