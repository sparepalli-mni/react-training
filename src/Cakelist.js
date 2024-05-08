import axios from "axios"
import { useEffect, useState } from "react"
import Cake from "./Cake"
import Cakes3 from "./Cakes3"
import { Row, Button, Spin } from "antd"
import { Link, useNavigate } from "react-router-dom"

function Cakelist() {
    var [cakes,setCake] = useState()
    useEffect(()=>{getCakeList()},[])
    var navigate = useNavigate()
    var [loading,setLoading] = useState(true);
    var cakeName;
    function getCakeList(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/allcakes",
            method:"GET"
        }).then((response)=>{
            console.log(response.data.data)
            setCake(response.data.data)
            setLoading(false)
        },(err)=>{
            console.log(err)
            setLoading(false)
        })
    }
    function getName(e){
        cakeName = e.target.value;
    }
    function searchCake(){
        var url ="/search?cakename="+cakeName
        navigate(url);
    }
    if(!localStorage.token) {
        navigate("/login")
    }
    
    return (
        <div>
             <Spin spinning={loading} size="large" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            </Spin>
            <input type="text" placeholder="cake name" onChange={getName}/>
            <br />
                <Button type="primary" onClick={searchCake}>Search</Button>
            <Row>
            {cakes?.map((each) => {
                return (
                    <Link to={`/display/${each.cakeid}`}>  <Cakes3 data={each} /> </Link>
                )
            })}
            </Row>
            </div>)
}
export default Cakelist;