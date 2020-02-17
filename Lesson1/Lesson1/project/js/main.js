const products = [
    {id: 1, /*title: 'Notebook',*/ price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];
const renderProduct = (title='NameProduct', price=0) => {
    return `<div class="product-item">
                <h3 class="product__title">${title}</h3>
                <img src="http://placehold.it/350x150"/>
                <p> Цена: ${price}</p>
                <button class="by-btn">Добавить в корзину</button>
            </div>`;
};

const renderProducts = (list) => {
    const productList = list.map((item) => renderProduct(item.title, item.price));
    document.querySelector('.products').innerHTML = productList.join("");
};

console.log(products.join(''));
renderProducts(products);
