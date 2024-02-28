
import { FaCircle ,FaLongArrowAltDown,FaMapMarkerAlt} from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsTruckFront } from "react-icons/bs";
import { RiBox3Fill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { MdPhone,MdExpandLess } from "react-icons/md";

import './index.css'


const OrderDetailsCard=(props)=>{
    const{orderDetails,onClickViewDetails,viewDetailsId}= props
    const onClickDetails =()=>onClickViewDetails(orderDetails.id)
    
    
    
    return(
        <li>
        <div className='list-main-container'>
            <p><FaCircle className="circle-icon"/> {orderDetails.id}</p>
            
            <div>
                <p className="list-tetx">{orderDetails.bidNumber}</p>
                <p className="list-text">{orderDetails.bidderName}</p>
                
            </div>
            <div>
                <p  className="list-tetx">{orderDetails.startDate}</p>
                <p className="list-text">{orderDetails.startTime}</p>

            </div>
            <p  className="list-tetx">{orderDetails.bidTimeRemaining}</p>
            <div className="column-container">
                <p  className="list-tetx">{orderDetails.fromCity}</p>
                <FaLongArrowAltDown />
                <p  className="list-tetx">{orderDetails.toCity}</p>

            </div>
            <p  className="list-tetx">{orderDetails.vehicleType}</p>
            <p  className="list-tetx">{orderDetails.materialWeight}</p>
            <div>
                <p  className="list-tetx">{orderDetails.response}</p>
                <button type='button' className="view-result-btn">View Result</button>
            </div>
           <div>
            <p  className="list-tetx">{orderDetails.assignedStaff}</p>
            <p className="list-text">{orderDetails.phoneNumber}</p>
           </div>
           <button type="button" className="view-result-btn" onClick={onClickDetails}>View Details</button>
           
            
          

        </div>
        <hr className="hr-tag"/>
        
            
        <div  className='bid-order-details-main-container'>
            <div className=" first-container">

            
                <div className="row-container">
                    <p className="bid-number-and-loading-date-text">Bid No: {orderDetails.bidNumber}</p>
                    <p>({orderDetails.bidderName})</p>
                </div>
                <div className="row-container">
                    <div className="column-container">
                        <FaCircle className="circle-icon icons"/>
                        <HiOutlineDotsVertical  />
                        <FaMapMarkerAlt  className="icons"/>
                        

                    </div>
                    <div>
                        <p className="location-text">{orderDetails.fromCityAddress}</p>
                        <p className="loading-point-text">Loading Point: <span className="address-text">{orderDetails.loadingPoint}</span></p>
                        <p className="location-text">{orderDetails.toCityAddress}</p>
                        <p className="unloading-point-text">Unloading Point: <span className="address-text">{orderDetails.unLoadingPoint}</span></p>
                       
                    </div>
                </div>
                </div>
                <div>
                    <p className="bid-number-and-loading-date-text"><span><FaSuitcase /> </span>Vehicle loading date : {orderDetails.startDate}</p>
                    <p className="text"><span><BsTruckFront /> </span>Vehicle Type: <span className="assigned-text">{orderDetails.vehicleType}</span><span>CNG</span></p>
                    <div className="row-container">
                        <p className="text"><span><RiBox3Fill /></span> Material: <span className="assigned-text">{orderDetails.material}</span></p>
                        <p className="text">Weight: {orderDetails.weight}</p>
                        
                    </div>
                    <div className="row-container">
                        <p className="text"><span><FaSuitcase /> </span>Request Date: <span className="assigned-text"> {orderDetails.requestdate}</span></p>
                        <p className="text"><span><FaSuitcase /> </span>Expiry Date: <span className="assigned-text">{orderDetails.expiryDate}</span></p>
                    </div>
                    <p className="text">Remarks : <span className="assigned-text">{orderDetails.remarks}</span></p>
                   

                </div>
                <div>
                    <p className="text"><span><IoMdContact /></span>Assigned Staff: <span className="assigned-text">{orderDetails.assignedStaff}</span></p>
                    <p className="text"><span><MdPhone /></span>Phone number: <span className="assigned-text">{orderDetails.phoneNumber}</span></p>
                    <p className="text">Target Price : <span className="assigned-text">{orderDetails.targetPrice}</span></p>
                    <p className="text">Number of Bider for this Bid: <span className="assigned-text">{orderDetails.numberOfBidder}</span></p>
                    <button type="button">View Details</button>
                    <button type="button">View Less <span><MdExpandLess /></span></button>
                </div>
            </div>
           

        </li>
    )
}
    



export default OrderDetailsCard