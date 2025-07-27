import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
})
export class TweetComponent {
  @Input() username: string = "";
  @Input() content: string = "";
  @Input() positive: boolean = false;
}
