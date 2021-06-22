import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  template: `
    <div class="row">
      <div class="col-xs-12">
        <img
          src="{{ recipe.imagePath }}"
          alt="{{ recipe.name }}"
          class="img-responsive"
          style="max-height: 250px">
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <h1>{{ recipe.name }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div class="btn-group" appDropdown>
          <button
            class="btn btn-primary dropdown-toggle"
            type="button">
            Manage Recipe <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li><a href="">To Shopping List</a></li>
            <li><a href="">Edit Recipe</a></li>
            <li><a href="">Delete Recipe</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        {{ recipe.description }}
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        Ingredients
      </div>
    </div>
  `,
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
