import axios from "axios";
import { useEffect, useState } from "react";
import Cakes3 from "./Cakes3";
import { Row } from "antd";
import { Link } from "react-router-dom";

function Cart(){
    var [cake,setCakes] = useState()
    var [loading,setLoading] = useState(true);
    useEffect(()=>{getCartList()},[])
    function getCartList(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/cakecart/",
            method:"GET",
            headers: {
                Authorization: localStorage.token
            }
        }).then((response)=>{  
            setCakes(response.data.data);
            console.log(response.data.data);
            setLoading(false);
        },(err)=>{
            console.log(err)
             setLoading(false);
        })
    }

    return(
        <div>
        <Row>
        {cake?.map((each) => {
            return (
                <>
                <Link to={`/display/${each.cakeid}`}><Cakes3 data={each} /> </Link>
                </>
            )
        })}
        </Row>
        </div>)

}
export default Cart;