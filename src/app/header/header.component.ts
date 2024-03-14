import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  slogan: string = "Your one shop for everything"

  getSlogan(){
    return "This is method"
  }

  source: string = '../../assets/shopping-image.jpg';
}
