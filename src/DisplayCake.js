import { Button, Card, Image, Row, Spin } from "antd";
import Alert from "antd/es/alert/Alert";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
function DisplayCake() {
    var params = useParams();
    var id = params.cakeid
    var [cake,setCake] = useState();
    var [loading,setLoading] = useState(true);
    var textValue = useRef("Add to Cart");
    useEffect(()=>{getCakeList()},[])
    function getCakeList(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/cake/"+id,
            method:"GET"
        }).then((response)=>{  
            setCake(response.data.data);
            console.log(response.data.data);
            setLoading(false);
        },(err)=>{
            console.log(err)
             setLoading(false);
        })
    }
    function addtoCart(cake){
        var reqJson = {
            cakeid:cake.cakeid,
            name:cake.name,
            price:cake.price,
            image:cake.image,
            weight:1
        }
        axios({
            url:process.env.REACT_APP_API_URL+"/addcaketocart",
            method:"POST",
            data: reqJson,
            headers: {
                Authorization: localStorage.token
            }
        }).then((response)=>{  
           console.log(response)
        },(err)=>{
            console.log(err)
        })
        textValue.current = "Added"
        console.log(textValue.current)
    }
    return (
        <div>
            <Spin spinning={loading} size="large"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      </Spin>
            <Row>
            <Card bordered={false} style={{ width: 500, height:500, marginLeft: 40, }}>
                <img width={400} height={300}
                    src={cake?.image}>
                </img>
            </Card>
            <Card bordered={false} style={{ width: 500, marginLeft: 40, }}>
                <li>
                <p>
                    name : {cake?.name}
                </p>
                <p>
                    price : {cake?.price}
                </p>
                <p>
                    description : {cake?.description}
                </p>
                <p>
                    Rating : {cake?.rating}
                </p>
               
                </li>
                <Button type="primary"  style={{ width: 200 }}onClick={()=>addtoCart(cake)}>{textValue.current}</Button>
                </Card> 
            </Row>
        </div>
    )
}

export default DisplayCake;