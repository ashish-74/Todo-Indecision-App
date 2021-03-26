const Header = (props)=>(
    <div className='header'>
        <h1 className='header'>{props.title}</h1>
        <h4 className='header'>{props.subtitle}</h4>
    </div>
);

Header.defaultProps = {
    title:'ToDo - Indecision App'
}

export default Header;