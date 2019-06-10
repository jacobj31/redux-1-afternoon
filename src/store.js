import {createStore} from 'redux';
 
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const AUTHOR_FIRST = "AUTHOR_FIRST";
export const AUTHOR_LAST = "AUTHOR_LAST";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INSTRUCTIONS = "ADD_INSTRUCTIONS";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const RESET = "RESET";


const initialState = {
    recipeName:'',
    recipeCategory:'',
    authorFirst:'',
    authorLast:'',
    ingredients: [],
    instructions: [],
    recipes: []
}

function reducer (state = initialState, action){
    const {type, payload} = action;
    switch (type){
        case UPDATE_NAME: return{...state, recipeName: payload}
        case UPDATE_CATEGORY: return{...state, recipeCategory: payload}
        case AUTHOR_FIRST: return{...state, authorFirst: payload}
        case AUTHOR_LAST: return{...state, authorLast: payload}
        case ADD_INGREDIENT: 
            const newIngredients = [...state.ingredients, payload]
            return{...state, ingredients: newIngredients}
        case ADD_INSTRUCTIONS: 
            const newInstructions = [...state.instructions, payload]
            return{...state, instructions: newInstructions}
        case CREATE_RECIPE:
            const {recipeName, recipeCategory, authorFirst, authorLast, ingredients, instructions} = state;
            const recipe = {recipeName, recipeCategory, authorFirst, authorLast, ingredients, instructions}
            const newRecipes = [...state.recipes, recipe];
            return {...state, recipes: newRecipes};
        case RESET :   
            return{...state, recipeName:'', recipeCategory:'', authorFirst: '', authorLast:'', ingredients: [], instructions: []}    
        default: return state
    }
}

export default createStore(reducer)