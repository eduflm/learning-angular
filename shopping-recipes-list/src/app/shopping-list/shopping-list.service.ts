import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    onIngredientAdded = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 10)
    ];

    public getIngredients() : Ingredient[] {
        return this.ingredients.slice();
    }

    public addIngredient(ingredient : Ingredient) : void { 
        this.ingredients.push(ingredient)
        this.onIngredientAdded.emit(this.ingredients.slice())
    }

    public addIngredients(ingredients : Ingredient[]) : void { 
        this.ingredients.push(...ingredients);
        this.onIngredientAdded.emit(this.ingredients.slice());
    }
}