import Cake from './Cake';
import { Row } from 'antd';
import Datatable from './Datatable';

function Mapexp() {
    var user = [
        {
            name: "sai via map",
            price: "22",
            image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
            tag: "smart"
        },
        {
            name: "teja  via map",
            price: "22",
            image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        },
    ]
    var temps = [
           
            {
                name: "teja",
                role: "test"
            },  
            {
                name: "Sai",
                role: "dev",
                location: "hyd",
            },
            {
                name: "teja",
                age: "22"
            }, 
    ]
    return (
        <div>
            <Row>
                {user.map((each) => {
                    return (
                        <Cake data={each} />
                    )
                })}
            </Row>
            {temps.map((each) => {
                return (
                Object.keys(each).map((ele) => {
                    return (
                        <>
                        <p>{ele} is {each[ele]}</p>
                        </>
                    )})
              )  })
            }
            <Datatable data={temps}/>
        </div>
    )
}

export default Mapexp;