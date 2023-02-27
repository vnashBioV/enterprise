import React, { createContext, useContext, useState, useEffect } from "react";
const Context = createContext();

export const StateContext = ({ children }) => {
    const [isTracking, setIsTracking] = useState(false);
    const [isShowSchedule, setIsShowSchedule] = useState(false);
    const [isShowRequest, setIsShowRequest] = useState(false);
    const [cargoLink, setCargoLink] = useState(true);
    const [isEnterprise, setIsEnterprise] = useState(false);
    const [fleetLink, setFleetLink] = useState(false);
    const [referalLink, setReferalLink] = useState(false);
    const [profileLink, setProfileLink] = useState(false);
    const [analysisLink, setAnalysisLink] = useState(false);
    const [walletLink, setWalletLink] = useState(false);
    const [getHelpLink, setGetHelpLink] = useState(false);
    const [contactLink, setContactLink] = useState(false);

    return (
        <Context.Provider
            value={{
                isEnterprise,
                setIsEnterprise,
                isTracking,
                setIsTracking,
                isShowSchedule,
                setIsShowSchedule,
                setIsShowRequest,
                isShowRequest,
                cargoLink,
                setCargoLink,
                isEnterprise,
                setIsEnterprise,
                fleetLink,
                setFleetLink,
                referalLink, 
                setReferalLink,
                profileLink,
                setProfileLink,
                analysisLink,
                setAnalysisLink,
                walletLink, 
                setWalletLink,
                getHelpLink,
                setGetHelpLink,
                contactLink,
                setContactLink
            }}
        >
            {children}
        </Context.Provider>
    )
}   
export const useStateContext = () => useContext(Context);