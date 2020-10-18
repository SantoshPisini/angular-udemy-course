import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipies: Recipe[] = [
    new Recipe('Breakfast Pizzas', 'Pizza for breakfast? We\'re in !These individual pizzas are inspired by Mexican flavors, but you can easily mix it up by using other ingredients like your favorite proteins and veggies.', 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2018/12/healthy-breakfast-pizzas.jpg'),
    new Recipe('Breakfast Pizzas', 'Pizza for breakfast? other ingredients.', 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2018/12/healthy-breakfast-pizzas.jpg'),

  ];

  constructor() { }

  ngOnInit() {
  }

}
