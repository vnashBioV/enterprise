import React, {useState, useEffect} from 'react'
import EnterpriseNav from './EnterpriseNav'
import { useParams, Link, useNavigate  } from 'react-router-dom'
import { useStateContext } from '../context/DashboardStateContext'

export default function Summary({
    // vehicleType,
    openPreThree, 
    setOpenPreThree,
    alertQuantity,
    pickSelected,
    setAlertQuantity,
}) {

    const {id} = useParams();
    const [vehicleEquipment, setVehicleEquipment] = useState([]);
    const [adHocServices, setAdHocServices] = useState([]);
    const [documentation, setDocumentation] = useState([]);
    const [personalProtective, setPersonalProtective] = useState([]);
    const [goodsInTransit, setGoodsInTransit] = useState([]);
    const [prerequisites, setPrerequisites] = useState([]);
    const [openSpinner, setOpenSpinner] = useState(false)
    const [vehicleType, setVehicleType] = useState(["Refrigerated"])
    const navigate = useNavigate();
    const { 
        isEnterprise,
        setIsEnterprise,
        isTracking,
        setIsTracking,
        isShowSchedule,
        setIsShowSchedule,
        setIsShowRequest,
        isShowRequest,
        setCargoLink,
        cargoLink
    } = useStateContext();
    const goodsInTransitFnc =(e)=>{
        setGoodsInTransit(parseInt(e.target.value))
    }

    const handleContinue = () =>{
        if(localStorage.getItem("cargoSelectd")){
            const selectedCargoDetails = JSON.parse(localStorage.getItem("cargoSelectd"))
            if(!selectedCargoDetails.details.quantity || pickSelected.length < 1){
                setAlertQuantity(true);
                setOpenPreThree(false);
            }else{
                setPrerequisites({
                    vehicleEquipment:vehicleEquipment,
                    adHocServices:adHocServices,
                    documentation:documentation,
                    personalProtective:personalProtective,
                    goodsInTransit:goodsInTransit,
                    prerequisites:prerequisites,
                    vehicle_type:vehicleType
                })
        
                const selectPrerequis = [{prerequisites:{
                            vehicle_equipment:vehicleEquipment,
                            ad_hoc_services:adHocServices,
                            documentation:documentation,
                            personal_protective:personalProtective,
                            goods_in_transit:goodsInTransit,
                            vehicle_type:vehicleType
                        },
                        date:new Date()
                }]
        
                localStorage.setItem("Prerequisites", JSON.stringify(selectPrerequis));
                setOpenSpinner(true)
                setTimeout(() => {
                    setOpenSpinner(false)
                },1000)
                setIsShowSchedule(true);
                setIsTracking(false);
                setIsEnterprise(false);
                setCargoLink(false);
                setIsShowRequest(false);
            }
        }
    }

    console.log("goods In Transit", goodsInTransit)
    console.log("prerequisites", prerequisites)

    useEffect(() => {
        if(prerequisites){
            localStorage.setItem("localBooking", JSON.stringify([...prerequisites, prerequisites]))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("vehicleType", JSON.stringify(vehicleType));
    }, [])

  return (
    <div className='summary'>
      <div className='modal-summary' style={{width:"34%"}}>
        <h3 className='container-prerequiz'>Refrigerated Prerequisites</h3>
        <div className="summary-wrapper">
            <div>
                <div>
                    <p className='summary-title'>Insurance (Goods in Transit)</p>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <label htmlFor="Rear Mount Container" className='summary-label'>
                            <input type="radio" name='goods' style={{marginRight:"10px"}} value="350000" onClick={goodsInTransitFnc}/>
                            R350 000
                        </label>

                        <label htmlFor="Rear Mount Container" className='summary-label'>
                            <input type="radio" name='goods' style={{marginRight:"10px"}} value="500000" onClick={goodsInTransitFnc}/>
                            R500 000
                        </label>
                        <input type="text" placeholder='Other' className='other' onChange={goodsInTransitFnc} style={{marginTop:"35px"}}/>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='continue-btn-container' style={{width:"100%"}}>
            <button 
                style={{
                        marginRight:"10px", 
                        padding:"3px 19px", 
                        borderRadius:"10px", 
                        boxShadow:"0px 0px 2px 0px", 
                        fontSize:"1rem",
                        backgroundColor:"#fff"
                }} onClick={() => setOpenPreThree(false)}>Cancel</button>
            <button 
                className='summary-one-close' 
                onClick={handleContinue}
            >
                Continue &nbsp; <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>
      </div>
    </div>
  )
}
