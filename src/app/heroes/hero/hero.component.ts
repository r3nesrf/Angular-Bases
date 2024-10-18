import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string{ //get se usa como propiedad
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void { //spiderman
    this.name = 'spiderman';
  }

  changeAge():void { //25
    this.age = 25;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach(elemento => {
    //   elemento.innerHTML = '<h1>Desde Angular</h1>'

    // });
  }
}
