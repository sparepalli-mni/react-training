import Navbar from "./Navbar";
import { Menu,Row,Button } from "antd";
import Cake from './Cake';
import { Link } from "react-router-dom";

function Homesec() {
    var data1 = [
        {
          name:"sai",
          price:"22",
          image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          tag:"smart"
        },
        {
          name:"teja",
          price:"22",
          image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        },
      ]
    return(
        <div> <h1>Home Section </h1> 
         <Row>
         <Cake data={data1[0]}/>
         <Cake data={data1[1]}/>
        </Row> 
         </div>
    )

}
export default Homesec;