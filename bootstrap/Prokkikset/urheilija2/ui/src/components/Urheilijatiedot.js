import Urheilijatieto from "./Urheilijatieto";
import React, {useContext, useEffect} from "react";
import urheilijatiedotContext from "../context/UrheilijatiedotContext";

const Urheilijatiedot = () => {
    const UrheilijatiedotContext = useContext(urheilijatiedotContext);
    console.log(UrheilijatiedotContext);


    useEffect(() => {
        UrheilijatiedotContext.getUrheilijatiedot();
        console.log(UrheilijatiedotContext);
    }, []);
    return(
        <>
        <h1 className="display-4 mb-2">
        <span className="text-danger">Urheilijatiedot</span>
        </h1>
        <React.Fragment>
            {UrheilijatiedotContext.urheilijatiedot.length ? UrheilijatiedotContext.urheilijatiedot.map((urheilijatieto) => (
                <Urheilijatieto key={urheilijatieto.id} urheilijatieto={urheilijatieto}/>
                ))
                :null}
        </React.Fragment>
        </>
    );
};

export default Urheilijatiedot;