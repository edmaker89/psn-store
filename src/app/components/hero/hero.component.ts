import { Component, Input } from '@angular/core';
import { HeroReleaseComponent } from "./hero-release/hero-release.component";

@Component({
    selector: 'app-hero',
    standalone: true,
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css',
    imports: [HeroReleaseComponent]
})
export class HeroComponent {
    @Input()
    heroTitle: string = ''

    @Input()
    heroProdutora: string = ''

    @Input()
    heroPlataforma: string = ''

    @Input()
    heroValor: string = ''

    @Input()
    heroClassificacao: string = ''

    @Input()
    heroBanner: string = ''

}
