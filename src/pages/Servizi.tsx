import PreventivoForm from "../components/PreventivoForm";
import Giardinaggio from "./Services/Giardinaggio";
import Pulizie from "./Services/Pulizie";

const Servizi = () => {
    return (
        <div >
            <Giardinaggio />
            <Pulizie />
            <PreventivoForm />
        </div>
    );
}



export default Servizi;
