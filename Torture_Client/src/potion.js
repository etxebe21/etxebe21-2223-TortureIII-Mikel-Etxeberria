export default class Potion
{
    constructor(xPos,yPos, name, image, value, ingredients, effects)
    {
        this.xPos        = xPos;      //Posicion inicial en X
        this.yPos        = yPos;      // Posicion inicial en Y
        this.name        = name;      
        this.image      = image; 
        this.value      = value;
        this.ingredients = ingredients; 
        this.effects     = effects;
    }
}