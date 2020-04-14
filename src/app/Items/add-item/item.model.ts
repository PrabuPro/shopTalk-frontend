export class Item{
    id:number;
    name:string;
    description:string;
    price:number;
    discount:number;
    categoryId:string;
    mallId:string;

    constructor(){
        this.id = null;
        this.name = '';
        this.description = '';
        this.price = null;
        this.discount = null;
        this.categoryId = '';
        this.mallId = '';  
    }

    create(obj){
        this.id = obj['id'];
        this.name = obj['name'];
        this.description = obj['description'];
        this.price = obj['price'];
        this.discount = obj['discount'];
        this.categoryId = obj['categoryId'];
        this.mallId = obj['mallId'];
    }

    get getAddItemObject(){
        return {
            name: this.name,
            description:this.description,
            price:this.price,
            discount:this.discount,
            categoryId: this.categoryId,
            mallId: this.mallId,
        }
    }
}