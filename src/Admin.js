import Datatable2 from "./DataTable2";
import { users } from "./Data";

export default function Admin(){
    return (
        <>
        <Datatable2 data={users}/>
        </>
    )
}