import { Input, EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoippingListService : ShoppingListService) {

    }

    private recipes: Recipe[] = [
        new Recipe('Teste Recipe', 'This is a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505', [
            new Ingredient('Meat', 1),
            new Ingredient('Fries', 20),
        ]),
        new Recipe('Pizza', 'Essa é uma Pizza', 'https://www.simplyrecipes.com/thmb/JWjdE8YwikAae0KZuyy6ZJW7Utw=/3000x2001/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg', [
            new Ingredient('Calabresa', 30),
            new Ingredient('Queijo', 50),
        ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]) {
        this.shoippingListService.addIngredients(ingredients)
    }
}