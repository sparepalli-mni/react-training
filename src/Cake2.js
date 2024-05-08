import { Button, Card, Image, Row } from "antd";
import { useParams } from "react-router-dom";
import { cakedata } from "./CakesData";
function Cake2() {
    var params = useParams();
    var name = params.name
    var cake = cakedata.filter((each) => {
        return each.name == (name)
    })[0]

    return (
        <div>
            <Row>
            <Card bordered={false} style={{ width: 300, marginLeft: 40, }}>
                <img width={200}
                    src={`../${cake.image}`}>
                </img>
            </Card>
            <Card bordered={false} style={{ width: 300, marginLeft: 40, }}>
                <p>
                    name : {cake.name}
                </p>
                <p>
                    Price : {cake.price}
                </p>
                </Card> 
            </Row>
        </div>
    )
}

export default Cake2;