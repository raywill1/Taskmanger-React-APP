import { AiFillBell } from "react-icons/ai";
const Nav = () => {
  return (
    <div className="container-nav">
        <div className="nav">
        <div className="items-1 item" style={{cursor:'pointer'}}>Today's Tasks</div>
        <div className="items-2 item" style={{cursor:'pointer'}}>Add Tasks</div>
        <div className="items-3 item" style={{cursor:'pointer'}}> Unfinished Tasks</div>
        <div className="items-4 item" style={{cursor:'pointer'}}>Weekly Performance</div>
        <div className="items-5 item" style={{cursor:'pointer'}}>All Tasks</div>
        <div className="items-5 item" style={{cursor:'pointer'}}><AiFillBell size="1.5em" color="white"  /></div>
        </div>
    </div>
  )
}

export default Nav