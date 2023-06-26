import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman','Ironman','Hulk','She hulk','Thor'];
  public deletedHero?: string= '';


  removeLastName():void{
    this.deletedHero = this.heroNames.pop();
  }
}
