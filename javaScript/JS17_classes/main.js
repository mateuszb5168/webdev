


class Pizza {
    constructor(pizzaType) {
        this.type = pizzaType;
        this.size = "medium";
        this.crust = "original";
    }
    get pizzaCrust() {
        return this.crust;
    }

    set pizzaCrust(pizzaCrust) { // instead: setCrust/getCrust, then at the bottom myPizza.setCrust
        this.crust = pizzaCrust;
    }


    bake() {
        console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza`)
    }
}

const myPizza = new Pizza("Neapolitan");
myPizza.pizzaCrust = "wurst";
myPizza.bake();

console.log(myPizza.pizzaCrust)

//i didnt learn classes in python despite something idk 