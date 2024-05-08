import { Card,Image,Badge, Row } from 'antd';
function Cakes3(props) {
   return(
    <Row>
    <Card title="" bordered={false} style={{width:250,marginLeft:40 ,border:'2px solid black' ,marginBottom:20}} >    
    <Image preview={false}  src={props.data.image} style={{width:150,height:150}}></Image>
    <p>{props.data.name}</p>
    <p>{props.data.price}</p>
    </Card>
    </Row>
   )
}

export default Cakes3;