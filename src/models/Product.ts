export class Product {
    id: number;
    img: string;
    name: string;
    description: string;
    price: number

    constructor(id: number, img: string, name: string, description: string, price: number) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}