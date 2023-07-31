import React,{useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdFeed } from 'react-icons/md';
import { FaTh ,FaUserAlt, FaRegChartBar , FaShoppingBag, FaCommentAlt} from 'react-icons/fa';
import { NavLink  } from "react-router-dom";
const Sidebar = ({children}) => {
    const [show,setShow] = useState(true)
    const toggleShow = () => setShow(!show)
    const menuItem = [{
        path:'/',
        name:'Dashboard',
        icon: <FaTh/>
    },{
        path:'/about',
        name:'About',
        icon: <FaUserAlt/>
    },{
        path:'/comment',
        name:'Comment',
        icon: <FaCommentAlt/>
    },{
        path:'/analytics',
        name:'Analytics',
        icon: <FaRegChartBar/>
    },{
        path:'/product',
        name:'Product',
        icon: <FaShoppingBag/>
    },{
        path:'/newsfeed',
        name:'Newsfeed',
        icon: <MdFeed/>
    }]
  return (
    <div className='container'>
      <div className="sidebar" style={{width : show ? '10rem' : '1rem'}}>
        <div className="top">
            <h1 style={{display : show ? 'block' : 'none'}}>Logo</h1>
            <GiHamburgerMenu className='menu' onClick={toggleShow}/>
        </div>
        {menuItem.map((item,index)=>{
            return <NavLink key={index} to={item.path} className='link' activeClassName='active'  style={{padding : show ? '15px 10px' : "8px 2px"  }} >
                <div className="icon" >{item.icon}</div>
                <div className="link_text" style={{display : show ? 'block' : 'none'}}>{item.name}</div>
            </NavLink>
        })}
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar
