import { Card,Image,Badge } from 'antd';
function Cake(props) {
    var data = {
        name:"Cake",
        price:"22",
        image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    }
    var Component
    //             {/* cover={<img alt="example" src={data.image} />}*/}
    if(props.data.tag) {
        Component = <Badge.Ribbon text={props.data.tag}> 
        <Card title="" bordered={false} style={{ width: 300, marginLeft:40,}} >    
            <Image preview={false}  src={props.data.image} ></Image>
         <p>{props.data.name}</p>
         {props.data.tag && <p>{props.data.tag}</p>} 
        </Card>
        </Badge.Ribbon>
    } else {
        Component = <Badge.Ribbon text="normal"> 
        <Card title="" bordered={false} style={{ width: 300, marginLeft:40,}} >    
            <Image preview={false}  src={props.data.image} ></Image>
         <p>{props.data.name}</p> 
         {props.data.tag && <p>{props.data.tag}</p>} 
        </Card>
        </Badge.Ribbon>
    }
    return (

             Component
             
    )
}

export default Cake;