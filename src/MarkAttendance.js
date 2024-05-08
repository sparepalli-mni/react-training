import { Button} from 'antd';
import { useState } from 'react';

function MarkAttendance () {
    var name1="";
    var [name,setName] = useState([])
    function handleName(event) {
        name1 = event.target.value
    }
    function demo() {
        setName([...name,name1]); 
    }
    return (
        <div>
           <input type="text" placeholder="username" onChange={handleName}/> 
           <Button type="primary" onClick={demo}>Show</Button>
           {name.map((each) => {
            return <p> {each} </p>
           } )}
        </div>
    )
}

export default MarkAttendance;
