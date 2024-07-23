import MenuItems from "./MenuItems";

const Header = () => {
    return (
        <header>
            <div className="shopLogo">SamsungBang</div>
            <div className="menuItems">

                <MenuItems text='О нас' link='#' />
                <MenuItems text='Товары' link='products' />
                <MenuItems text='Контакты' link='footer' />
            </div>
        </header>

    )
}
export default Header;