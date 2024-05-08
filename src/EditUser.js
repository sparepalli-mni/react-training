import { useParams } from "react-router-dom"
import { users } from "./Data"
import { Row,Button } from "antd"
import { useState } from "react"

function EditUser() {
    var params = useParams()
    var userId = params.userid
    var user = users.filter((each) => {
        return each.id == Number.parseInt(userId)
    })[0]
    var [saveuser,setUser] = useState()
    var keys = Object.keys(user);
    function handlepassword(event){
      console.log(event.target.value)
      //user.email = event.target.value
  }
    return (
        <div>
          {keys.map((each) => {
            return(
                <Row>
              <li>{each} : <input type="text" placeholder={each} defaultValue={user[each]} onChange={handlepassword}/> </li> 
                </Row>
            )
          })
          }
          <Button type="primary" >Save</Button>
        </div>
    )
}

export default EditUser;