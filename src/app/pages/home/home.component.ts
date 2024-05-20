import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { HeroComponent } from "../../components/hero/hero.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CardComponent, HeroComponent]
})
export class HomeComponent {

}
