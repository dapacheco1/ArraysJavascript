class Product{

    constructor(title,price,img){
        this.setTitle(title);
        this.setPrice(price);
        this.setImage(img);
    }

    getTitle(){
        return this.title;
    }

    setTitle(title){
        this.title = title;
    }

    getPrice(){
        return this.price;
    }

    setPrice(price){
        this.price = price;
    }

    getImage(){
        return this.img;
    }

    setImage(img){
        this.img = img;
    }
}

const burguer = new Product("Burguer",121,'https://media-cdn.tripadvisor.com/media/photo-s/1a/72/50/58/mediterranea.jpg');
const pizza = new Product("Pizza",20,'https://www.saborusa.com/wp-content/uploads/2019/10/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png');
const products = [burguer,pizza];

const app = document.querySelector('#products');

products.forEach(item => {
    app.innerHTML += `
        <li>
            <img src="${item.getImage()}" style="width:100px;height:100px"><br>
            <h3>${item.getTitle()}</h3>
            Price: <span><b>$ ${item.getPrice()} USD</b></span><br>
        </li>
    `;
});
