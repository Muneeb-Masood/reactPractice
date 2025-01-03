


function Header(props){
    return <>
    <h1>This is header</h1>
    <h2>My name is {props.name}</h2>
    {props.children}
    </>
}


export default Header;