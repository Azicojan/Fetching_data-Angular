import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImageApiService {
  private apiUrl = 'https://api.unsplash.com/photos/random';
  private accessKey = 'Ja3ubGsPHSyDBNdISVoze_9KfJVQQymm3Hcksbs_UBI';

  constructor(private http: HttpClient) {}

  getRandomImage() {
    return this.http.get<any>(`${this.apiUrl}?client_id=${this.accessKey}`);
  }
}

