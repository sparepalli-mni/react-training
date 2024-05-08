import { Menu, Button } from "antd";
import { Link } from "react-router-dom";

function Navbar() {
    const items = [{ label: <Link to="/">Home </Link> }, { label: <Link to="/login"><Button type="primary">Login</Button></Link> }, { label: <Link to="/signup"> SignUp</Link> }, { label: <Link to="/forgot" >Forgotpass </Link> }, { label: <Link to="/admin" >Admin</Link> },
    { label: <Link to="/cakes" >Cakes Section</Link> },  { label: <Link to="/cakelist" >Cakes List</Link> },
    { label: <Link to="/cart" ><Button type="primary">Cart</Button></Link> }]
    return (
        <div>
            <Menu mode="horizontal" items={items} />
        </div>
    )
}

export default Navbar;
