import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Tomato', 10),
    new Ingredient('Garlic', 5)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngAdded(ing: Ingredient) {
    this.ingredients.push(ing);
  }
}
