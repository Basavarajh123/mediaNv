import {Component} from 'react'
import { BsFillPlusSquareFill,BsSearch } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";

import './index.css'

import Header from '../Header'
import OrderDetailsCard from '../OrderDetailsCard';

const navItemList1=[
    {
        navItem:'Bid',
        id:'Bid'
    },
    {
        navItem:'POD',
        id:'POD'
    },
    {
        navItem:'Vendor',
        id:'Vendor'
    },
    {
        navItem:'User',
        id:'User'
    },
    
]

const navItemList2=[
    {
        navItem:'Settings',
        id:'Settings'
    },
    {
        navItem:'Profile',
        id:'Profile'
    },
    {
        navItem:'Contact US',
        id:'Contact_us'
    },
    {
        navItem:'Logout',
        id:'Logout'
    },
    
]

const orderDetailsList=[
    {
        id:1,
        bidNumber:122345678123,
        startDate:"14/02/2024",
        startTime:"5:40 Pm",
        fromCity:"Gurgaon",
        fromCityAddress:'Daravi',
        toCityAddress:'none',
        material:'Agricultural Product',
        weight:"14 Tonnes",
        requestdate:'15/02/2024',
        expiryDate:'15/02/2024',
        phoneNumber:'+91 332423442442',
        targetPrice:5000,
        numberOfBidder:54,
        remarks:'Urgent Delivery',
        bidTimeRemaining:'7hr 20min',
        loadingPoint:'Gurgaon',
        unLoadingPoint:'Mumbai',
        toCity:'Mumbai',
        vehicleType:'Truck, 20 ft Close body , 1',
        materialWeight:"4000 Kg",
        response:4,
        assignedStaff:'Mohit',

    },
    {
        
        id:2,
        bidNumber: 16515120650125,
        startDate:"17/02/2024",
        startTime:"5:40 Pm",
        fromCity:" Gurugram",
        fromCityAddress:'Manesar, Gurugram, Haryana',
        toCityAddress:'Kotputli, Rajasthan',
        material:'Agricultural Product',
        weight:"14 Tonnes",
        requestdate:'15/02/2024',
        expiryDate:'15/02/2024',
        phoneNumber:'+91 332423442442',
        targetPrice:5000,
        numberOfBidder:54,
        remarks:'Urgent Delivery',
        bidTimeRemaining:'7hr 20min',
        loadingPoint:'Ramchandra Ramniwas oil mill ,Alwar ,Rajasthan',
        unLoadingPoint:'Ramchandra Ramniwas oil mill ,Alwar ,Rajasthan',
        toCity:'Rajasthan',
        vehicleType:'Truck, 20 ft Close body , 1',
        materialWeight:"4000 Kg",
        response:4,
        assignedStaff:'Rahul Pandey',

    },{
        id:3,
        bidNumber:122345678123,
        startDate:"14/02/2024",
        startTime:"5:40 Pm",
        fromCity:"Gurgaon",
        fromCityAddress:'Daravi',
        toCityAddress:'none',
        material:'Agricultural Product',
        weight:"14 Tonnes",
        requestdate:'15/02/2024',
        expiryDate:'15/02/2024',
        phoneNumber:'+91 332423442442',
        targetPrice:5000,
        numberOfBidder:54,
        remarks:'Urgent Delivery',
        bidTimeRemaining:'7hr 20min',
        loadingPoint:'Gurgaon',
        unLoadingPoint:'Mumbai',
        toCity:'Mumbai',
        vehicleType:'Truck, 20 ft Close body , 1',
        materialWeight:"4000 Kg",
        response:4,
        assignedStaff:'Mohit',

    },{
        id:4,
        bidNumber:122345678123,
        startDate:"14/02/2024",
        startTime:"5:40 Pm",
        fromCity:"Gurgaon",
        fromCityAddress:'Daravi',
        toCityAddress:'none',
        material:'Agricultural Product',
        weight:"14 Tonnes",
        requestdate:'15/02/2024',
        expiryDate:'15/02/2024',
        phoneNumber:'+91 332423442442',
        targetPrice:5000,
        numberOfBidder:54,
        remarks:'Urgent Delivery',
        bidTimeRemaining:'7hr 20min',
        loadingPoint:'Gurgaon',
        unLoadingPoint:'Mumbai',
        toCity:'Mumbai',
        vehicleType:'Truck, 20 ft Close body , 1',
        materialWeight:"4000 Kg",
        response:4,
        assignedStaff:'Mohit',
        bidderName:'Sunder Yadav'

    }

]

class Home extends Component{

state={
    tabId:navItemList1[0].id
}


onRenderOrdercardDetails=()=>(
    <div className='order-details-main-container'>
    <div className='status-items-main-container'>
        <ul className='status-items-container'>
            <li className='live-bid-credited-text'>Live (30)</li>
            <li className='respond-text'>Responded (30)</li>

            <li className='unrespond-text'>Unresponded (30)</li>
        </ul>
        <div className='status-bid-container'>
            <ul className='status-items-container'>
                <li className='live-bid-credited-text'>Bid Creadited</li>
                <li className='today-yes-text'>Today</li>
                <li className='today-yes-text'> Yesterday</li>
            </ul>
            <select className='select-container'>
                <option className='option-text'>Calender</option>
                <option className='option-text'>None</option>
            </select>
            <FaFilter size={30}  className='filter-icon'/>
        </div>
    </div>
        <ul className='order-details-container'>
            <li className='order-details-container-text'> S No</li>
            <li className='order-details-container-text'>Bid Number <br/>Creadited By</li>
            <li className='order-details-container-text'> Start Date <br/> & Time</li>
            <li className='order-details-container-text'>Bid Time <br/>Remaining</li>
            <li className='order-details-container-text'>From city <br/>
                To city</li>
            <li className='order-details-container-text'>Vehicle Type, Size <br/>
                Body , No. of Vehicle</li>
            <li className='order-details-container-text'> Material Weight <br/>
                (in Kg)</li>
            <li className='order-details-container-text'>Response</li>
            <li className='order-details-container-text'>Assigned Staff</li>
            <li className='order-details-container-text'>Details</li>
        </ul>
    </div>
)

onRenderTopBar=()=>(
    <div className='top-bar-container'>
        <div className='top-section-items-container'>
        <ul className='list-items-container'>
            <li className='list-text live-text'>Live</li>
            <li className='list-text'>Result </li>
            <li className='list-text'>History</li>
        </ul>
        <div   className='search-input-container'>
            <BsSearch size={25} className='search-icon' />
            <input type='search' className='search-input' placeholder='Search' />
        </div>
       

        </div>
        <button type='button' className='create-btn'>Create <span className='create-icon' ><BsFillPlusSquareFill size={24} /></span></button>

      
    </div>
)



onchangeTab=(tabId)=>{
    this.setState({
        tabId
    })
}

    render(){
        const{tabId}= this.state
        console.log(tabId)
        return(
            <div>

               <Header navItems1={navItemList1} onchangeTab={this.onchangeTab} navItems2={navItemList2}  tabId={ tabId}/>
               {this.onRenderTopBar()}
               <div>
                    {this.onRenderOrdercardDetails()}
                    {orderDetailsList.map(eachOrder=>(<OrderDetailsCard orderDetails={eachOrder} key={eachOrder.id} />))}
               </div>
            </div>
        )
    }
}


export default Home