
import { FaCircle ,FaLongArrowAltDown} from "react-icons/fa";

import './index.css'


const OrderDetailsCard=(props)=>{
    const{orderDetails}= props
    return(
        <div>
        <li className="list-main-container">
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
            <div>
                <p  className="list-tetx">{orderDetails.fromCity}</p>
                <FaLongArrowAltDown />
                <p  className="list-tetx">{orderDetails.toCity}</p>

            </div>
            <p  className="list-tetx">{orderDetails.vehicleType}</p>
            <p  className="list-tetx">{orderDetails.materialWeight}</p>
            <div>
                <p  className="list-tetx">{orderDetails.response}</p>
                <button type='button'>View Result</button>
            </div>
           <div>
            <p  className="list-tetx">{orderDetails.assignedStaff}</p>
            <p className="list-text">{orderDetails.phoneNumber}</p>
           </div>
           <button type="button">View Details</button>
           
            
          

        </li>
        <hr className="hr-tag"/>
        

           

        </div>
    )
}
    



export default OrderDetailsCard