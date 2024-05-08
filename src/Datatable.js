import { Table,Button} from "antd"
import { useState } from "react";
import Editdata from './Editdata';

function Datatable({data,deleteUser,saveUser,handlepassword,handleEmail,handleExp,isedit}) {
    var [user,setUser] = useState({});
    var [isEdit,seEdit] = useState(isedit);
    var [index,setIndex] = useState();
  //  var [data,setData] = useState(data);
    var tk = []
    data.forEach((each) => {
        tk=[...tk,...Object.keys(each)]
    })
    var uk = new Set(tk);
    var keys = Object.keys(data[0]);
    var columns1 = keys.map((each) => {
        return {
            title:each.toUpperCase(),
            dataIndex:each,
            key:each
        }
    })
    var columns =[]
    uk.forEach((each)=>{
        columns.push(
            {
                title:each.toUpperCase(),
                dataIndex:each,
                key:each,
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.exp - b.exp,
            }
        )
    })
    columns.push(
        {
            title:"Action",
            render : (text,record,index) => {
                return (
                     <Button type="primary" onClick={()=>{deleteUser(index)}}>Delete</Button>   
                )
            },
            key:"action"
        }
    )
    columns.push(
        {
            title:"Action",
            render : (text,record,index) => {
                return (
                     <Button type="primary" onClick={()=>{editUser(record,false,index)}}>Edit</Button>   
                )
            },
            key:"action"
        }
    )
    function editUser(record,isedit,index) {
        seEdit(isedit)
        setUser(record)
        setIndex(index)

    }
    function saveUser(){
        seEdit(true)
      }
    if (isEdit) {
        return (
            <>
                <Table dataSource={data} columns={columns} />
            </>
        )
    } else {
        return (
            <>
                {/* <input type="text" placeholder="username" onChange={handleEmail} defaultValue={user.email} />
                <br />
                <input type="password" placeholder="password"  defaultValue={user.password} onChange={handlepassword}/>
                <br />
                <input type="text" placeholder="Exp"  defaultValue={user.exp} onChange={handleExp}/>
                <br />
                <Button type="primary" onClick={()=>saveUser({index})}>Save</Button> */}
                <Editdata user={user} saveUser={saveUser}/>
        <br/>
            </>
        )
    }
}

export default Datatable;