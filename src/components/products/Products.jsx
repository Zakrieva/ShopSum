import Product from "./product/Product"

const Products = () => {
    const products = [
        { model: 'Samsung ...', img: './product/', price: '$1000', href: '#', id: 0 },
        { model: 'Samsung ...', img: './product/', price: '$1000', href: '#', id: 1 },
        { model: 'Samsung ...', img: './product/', price: '$1000', href: '#', id: 3 },
        { model: 'Samsung ...', img: './product/', price: '$1000', href: '#', id: 4 },
        { model: 'Samsung ...', img: './product/', price: '$1000', href: '#', id: 5 },
        { model: 'Samsung ...', img: './product/', price: '$1000', href: '#', id: 6 }
    ]
    return (
        <div className="product-items">

            {products.map(({ model, img, price, href }) =>
                <Product model={model} img={img} price={price} href={href} key={id} />
            )}
        </div>
    )
}
export default Products;