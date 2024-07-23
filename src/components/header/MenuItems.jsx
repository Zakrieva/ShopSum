
const MenuItems = ({ text, link }) => {
    return (
        <div className="menuItem"><a href={link}>{text}</a></div>
    )
}
export default MenuItems;