import { GrShareRounded } from "react-icons/gr";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import './index.css'

const Header =(props)=>{
    const {navItems1,onchangeTab, navItems2, tabId}= props

    return(
        <div className="header-main-container">
            <div className="header-left-contaier">
                <div className="logo-container">
                    <GrShareRounded  size={30} className="logo"/>  
                    <h1 className="logo-text">LOGO</h1>
                </div>
                
                <div className="nav-tabs-container" >
                    <ul className="ul-container">
                        {navItems1.map(eachItem=>{
                            const onClickTab= ()=> onchangeTab(eachItem.id)
                            const tabClassName= eachItem.id===tabId ? 'active-tab list-container':'list-container'
                            return(
                                <li key={eachItem.id} onClick={onClickTab} className={tabClassName}>
                                    <BsFillGrid1X2Fill size={20} className="grid-icon"/>
                                    
                                   <p className="list-item-text">{eachItem.navItem}</p> </li>
                            )
                        })}
                    </ul>
                    <ul  className="ul-container2">
                    {navItems2.map(eachItem=>{
                            const onClickTab= ()=> onchangeTab(eachItem.id)
                            const tabClassName= eachItem.id===tabId ? 'active-tab list-container':'list-container'
                            
                            return(
                                <li key={eachItem.id} onClick={onClickTab} className={tabClassName}>
                                    <BsFillGrid1X2Fill size={20} className="grid-icon"/>
                                    
                                   <p className="list-item-text">{eachItem.navItem}</p> </li>
                            )
                        })}

                    </ul>

                </div>
              
            </div>
            <div className="header-right-container">
                <ul className="navbar-right-section">
                {navItems1.map(eachItem=>{
                            const onClickTab= ()=> onchangeTab(eachItem.id)
                            const tabClassName=eachItem.id===tabId ?'active-tab-text nav-item-text list-container':'nav-item-text list-container'
                            return(
                                <li key={eachItem.id} onClick={onClickTab} className={tabClassName}>
                                    
                                    
                                   <p >{eachItem.navItem}</p> </li>
                            )
                        })}
                </ul>
                <MdAccountCircle  size={30} className="grid-icon"/>
                <p className=" nav-item-text">Username</p>
            </div>
       


    </div>
    )
}
   


export default Header





