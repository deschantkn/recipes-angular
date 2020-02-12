import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'Just a test',
      'https://images.unsplash.com/photo-1540660290370-8aa90e451e8a?ixlib' +
      '=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    ),
    new Recipe(
      'A Test Recipe',
      'Just a test',
      'https://images.unsplash.com/photo-1540660290370-8aa90e451e8a?ixlib' +
      '=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
