export class Watch {
    constructor(id, name, color, price, brand, year, image) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.price = price;
        this.brand = brand;
        this.year = year;
        this.image = image;
    }

    getPrice() {
        return this.price;
    }
    getBrand() {
        return this.brand;
    }
    getColor() {
        return this.color;
    }
    getYear() {
        return this.year;
    }
}
