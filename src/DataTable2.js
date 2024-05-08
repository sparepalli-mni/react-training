import { Button, Table } from "antd"
import { EditFilled , DeleteFilled } from "@ant-design/icons"
import { Link } from "react-router-dom"
function Datatable2({ data , deleteUser }) {

    var users = data
    var totalkeys = []

    function editUser(){
        
    }
    function saveUser(){
        
    }
    users.forEach((each) => {
        var keys = Object.keys(each)
        totalkeys.push(...keys)

    })
    console.log("total keys", totalkeys)
    var uniquekeys = new Set(totalkeys)
    var columns = []
    uniquekeys.forEach((each) => {
        columns.push({
            title: each.toUpperCase(),
            dataIndex: each,
            key: each
        })

    })
    columns.push({
        title: "Action",
        render: (text,record, index) => {
            return <Link to ={`/edituser/${index+1}`} ><Button onClick={editUser.bind(null,index)}  type="primary"><EditFilled></EditFilled></Button></Link>
        },
       
    })
    if(deleteUser){
        columns.push({
            title: "Action",
            render: (text,record, index) => {
                return <Button onClick={deleteUser.bind(null,index)} style={{ backgroundColor: "red" }} type="primary"><DeleteFilled></DeleteFilled></Button>
            },
           
        })
    }
   
    return (
        <>
            {/* <h1>Table data</h1> */}
            <Table dataSource={users} columns={columns} />;
        </>
    )
}

export default Datatable2