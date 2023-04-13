import { BsFillHouseDoorFill, BsFillPersonFill } from "react-icons/bs";
const Header = () => {
  return (
    <div className='header'>
        <div className="header-items h-item-1" ><h2 style={{cursor:'pointer'}}>
             <BsFillHouseDoorFill size="2em" color="blanchedalmond"/> Task Manager</h2>
        </div>
       
        <div className="header-items h-item-2"></div>
    <div className="header-items h-item-3" style={{cursor:'pointer'}}><BsFillPersonFill  size="2em" /></div>
    </div>
  )
}

export default Header