import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { HeaderComponent } from "../header/header.component";
import { NotificationComponent } from "../notification/notification.component";
import { SearchComponent } from "../search/search.component";
import { ProductsComponent } from "../products/products.component";

@Component({
    selector: 'app-container',
    standalone: true,
    imports: [NavbarComponent, HeaderComponent,NotificationComponent, SearchComponent, ProductsComponent],
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})

export class ContainerComponent {

}