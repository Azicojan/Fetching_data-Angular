import { Component, OnInit } from '@angular/core';
import { ImageApiService } from '../image-api.service';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css'],
})
export class ImageDisplayComponent implements OnInit {
  imageUrl!: string;
  comment!: string;

  constructor(private imageApi: ImageApiService) {}

  ngOnInit() {
    this.loadRandomImage();
  }

  loadRandomImage() {
    this.imageApi.getRandomImage().subscribe((data) => {
      this.imageUrl = data.urls.regular;
      this.comment = 'What an amazing image!';
    });
  }
}
