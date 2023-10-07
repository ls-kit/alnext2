import Navbar from "./Navbar";
import Footer from "./Footer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import init from "../../modules/init";

const Layout = ({children}) => {
    const dispatch = useDispatch()
    const general = useSelector(state => init.selectors.selectGeneral)
    console.log('general', general)
    useEffect(() => {
        dispatch(init.loadGeneral()).then(r => console.log(r))
    }, [])
    return (
        <>
            <Navbar/>
                {children}
            <Footer/>
        </>
    )
}
export default Layout