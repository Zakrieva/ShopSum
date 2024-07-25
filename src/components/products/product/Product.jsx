
const Product = ({ model, img, price, href }) => {
    return (
        <div className="product-item" >
            <div className="product-item-img">
                <img src={img}></img>
            </div>

            <div className="product-list">
                <a href={href}>{model}</a>
                <span className="price">{price}</span>
            </div>
        </div>)
}

export default Product;