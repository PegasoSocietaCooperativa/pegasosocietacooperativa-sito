import { useLocation } from "react-router";
import PreventivoForm from "../components/PreventivoForm";
import Edilizia from "./Services/Edilizia";
import Giardinaggio from "./Services/Giardinaggio";
import Portierato from "./Services/Portierato";
import Pulizie from "./Services/Pulizie";
import Termoidraulica from "./Services/Termoidraulica";
import Tinteggiature from "./Services/Tinteggiature";
import { useEffect } from "react";

const Servizi = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);


    return (
        < >
            <Giardinaggio />
            <Pulizie />
            <Termoidraulica />
            <Portierato />
            <Tinteggiature />
            <Edilizia />
            <PreventivoForm />
        </>
    );
}



export default Servizi;
