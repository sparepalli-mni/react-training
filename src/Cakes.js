import { Button, Card, Image, Row } from "antd";
import React from 'react';
import { cakedata } from "./CakesData";
import { useNavigate } from "react-router-dom"

function Cakes() {
    var cakesData = cakedata
    var navigate = useNavigate()
    function handleImageClick(data) {
        navigate('/cake/'+data.name+'/details')
    }

    return (
        <>
            <Row>
                {cakesData.map((each) => {
                    var da = {...each}
                    return (
                        <>
                            <Card bordered={false} style={{ width: 300, marginLeft: 40, }}>
                                <div onClick={() => handleImageClick(each)} style={{ cursor: 'pointer' }}>
                                    <img width={200}
                                        src={each['image']}>
                                    </img>
                                    {Object.keys(each).map((key) => {
                                        return (
                                            <>
                                                <p>{each[key]}</p>
                                            </>
                                        )
                                    }
                                    )}
                                </div>
                            </Card>
                        </>)
                })
                }
            </Row>
        </>
    )
}

export default Cakes;