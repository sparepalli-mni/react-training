import { Button, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Cakes3 from "./Cakes3";

function SearchCake () {
    var [query,setQuery] = useSearchParams()
    var cakename=query.get('cakename');
    var [cakes,setCake] = useState()
    useEffect(()=>{getCakeList()},[])
    function getCakeList(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/searchcakes?q="+cakename,
            method:"GET"
        }).then((response)=>{
            // var cakess = response.data.data.filter((each) => {
            //     return each.name == cakename
            // })
            // console.log(typeof cakess[0].cakeid)
            setCake(response.data.data)
        },(err)=>{
            console.log(err)
        })
    }
    
    return(
        <div>
        <Row>
        {cakes?.map((each) => {
            return (
                <>
                <Link to={`/display/${each.cakeid}`}><Cakes3 data={each} /> </Link>
                </>
            )
        })}
        </Row>
        </div>)
}

export default SearchCake;