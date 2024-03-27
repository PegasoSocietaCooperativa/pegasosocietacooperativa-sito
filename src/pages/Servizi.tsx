import PreventivoForm from "../components/PreventivoForm";
import Edilizia from "./Services/Edilizia";
import Giardinaggio from "./Services/Giardinaggio";
import Portierato from "./Services/Portierato";
import Pulizie from "./Services/Pulizie";
import Termoidraulica from "./Services/Termoidraulica";
import Tinteggiature from "./Services/Tinteggiature";

const Servizi = () => {
    return (
        <div >
            <div id='giardinaggio'>
                <Giardinaggio />
            </div>
            <Pulizie />
            <Termoidraulica />
            <Portierato />
            <Tinteggiature />
            <Edilizia />
            <PreventivoForm />
        </div>
    );
}



export default Servizi;
