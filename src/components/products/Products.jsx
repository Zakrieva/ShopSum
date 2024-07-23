import Product from "./product/Product"

const Products = () => {
    const products = [
        { model: 'Samsung ...', img: './product/', price: '$1000', href: '#' },
        { model: 'Samsung ...', img: './product/', price: '$1000', href: '#' },
        { model: 'Samsung ...', img: './product/', price: '$1000', href: '#' },
        { model: 'Samsung ...', img: './product/', price: '$1000', href: '#' },
        { model: 'Samsung ...', img: './product/', price: '$1000', href: '#' },
        { model: 'Samsung ...', img: './product/', price: '$1000', href: '#' }
    ]
    return (<div className="product-items">

        {products.map(({ model, img, price, href }) => {
            <Product model={model} img={img} price={price} href={href} />
        })}
    </div>
    )
}
export default Products;