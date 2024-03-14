import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products = [
    {
      id: 1,
      name: "Bhavik Sejpal",
      study: "MCA",
      pass: "Pass"
    },
    {
      id: 2,
      name: "Ojas Smith",
      study: "B-Ed",
      pass: "Fail"
    },
    {
      id: 3,
      name: "Karan Sehgal",
      study: "Bcom",
      pass: "Pass"
    },
    {
      id: 4,
      name: "Dhiri Mehra",
      study: "Fashion Design",
      pass: "Pass"
    },

  ]
}
