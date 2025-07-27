import { Component } from '@angular/core';
import { TweetComponent } from "../tweet/tweet.component";
import { ButtonComponent } from "../button/button.component";
import { ShadowComponent } from "../shadow/shadow.component";
import { TweetModule } from '../tweet/tweet.module';
import { ButtonModule } from '../button/button.module';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: true,
  imports: [TweetModule, ButtonModule, ShadowComponent]
})
export class HeroComponent {

}
