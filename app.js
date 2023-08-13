class Hamburger {
    static SIZE_SMALL = { price: 50, cal: 20 }
    static SIZE_BIG = { price: 100, cal: 40 }
    static STUFFING_CHEESE = { price: 10, cal: 20 }
    static STUFFING_SALAD = { price: 20, cal: 5 }
    static STUFFING_POTATO = { price: 15, cal: 10 }
    static TOPPING_SPICE = { price: 15, cal: 0 }
    static TOPPING_MAYO = { price: 20, cal: 5 }

    constructor(size, stuffing) {
        this.size = size
        this.stuffing = stuffing
    }

    addTopping(topping) {
        this.topping = topping
    }

    calculatePrice() {
        let price = 0
        for (let property of Object.entries(this)) {
            price += property[1].price
        }
        return price
    }

    calculateCalories() {
        let calories = 0
        for (let property of Object.entries(this)) {
            calories += property[1].cal
        }
        return calories
    }
}

burger1 = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE)
console.log("Calories " + burger1.calculateCalories())
console.log("Price " + burger1.calculatePrice())
burger1.addTopping(Hamburger.TOPPING_MAYO)
console.log("Calories with mayo " + burger1.calculateCalories())
console.log("Price with mayo " + burger1.calculatePrice())
