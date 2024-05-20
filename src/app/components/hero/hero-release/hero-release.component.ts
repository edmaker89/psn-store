import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-release',
  standalone: true,
  imports: [],
  templateUrl: './hero-release.component.html',
  styleUrl: './hero-release.component.css'
})
export class HeroReleaseComponent implements OnInit{
  
  urlClassificacao: string = ''
  descricaoClassicacao: string = 'Drogas Lícitas, Violencia Extrema'
  descricao2Classificacao: string = 'Compras no jogo'
  
  @Input() heroTitle: string = '';
  @Input() heroPlataforma: string = '';
  @Input() heroProdutora: string = '';
  @Input() heroValor: string = '';
  
  @Input() heroClassificacao: string = '';
  
  
  
  classifcador() {
    if (this.heroClassificacao == "18") {
      this.urlClassificacao = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/DJCTQ_-_18.svg/2048px-DJCTQ_-_18.svg.png'
      this.descricaoClassicacao = 'Drogas Lícitas, Violência Extrema'
      this.descricao2Classificacao = 'Compras no jogo'
    }else{
      this.urlClassificacao = "https://logodownload.org/wp-content/uploads/2017/07/classificacao-livre-logo.png"
    }
    
  }
  
  ngOnInit(): void {
    this.classifcador()
  }
}
