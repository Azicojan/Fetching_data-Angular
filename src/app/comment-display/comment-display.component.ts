import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment-display',
  templateUrl: './comment-display.component.html',
  styleUrls: ['./comment-display.component.css'],
})
export class CommentDisplayComponent {
  @Input() comment!: string;
}

