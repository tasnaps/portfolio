import React from 'react'
import {useNavigate} from "react-router-dom";
import { useState, useContext } from "react";
import urheilijatiedotContext from '../context/UrheilijatiedotContext';


export default function LisaaUrheilijatieto() {
    let history = useNavigate();
    const [nimi, setNimi] = useState("");
    const [vuosi, setVuosi] = useState("");
    const [paino, setPaino] = useState("");
    const [linkki, setLinkki] = useState("");
    const [laji, setLaji] = useState("");
    const [saavutukset, setSaavutukset] = useState("");
    const UrheilijatiedotContext = useContext(urheilijatiedotContext);

    const handleSubmit = async (e) => {
        const uusiUrheilijatieto = {
        nimi: nimi,
        vuosi: vuosi,
        paino: paino,
        linkki: linkki,
        laji: laji,
        saavutukset: saavutukset};

        console.log(uusiUrheilijatieto);
        UrheilijatiedotContext.setUrheilijatiedot(uusiUrheilijatieto);
        history("/");
        };
       

    return (
        <div className="card mb-3">
            <div className="card-header">Lisää urheilijan tieto</div>
            <div className="card-body">
            <form onSubmit={handleSubmit.bind(this)}>


                <div className="form-group">
                   <label htmlFor="nimi">Nimi</label>
                       <input id="nimitieto" type="text" name="nimi" className="form-control form-control-lg" placeholder="Syötä nimi..." value={nimi} onChange={(event) => setNimi(event.target.value)}/>
                           <div className="invalid-feedback">Täytä nimi
                           </div>
                </div>
                <div className="form-group">
                   <label htmlFor="vuosi">Vuosi</label>
                        <input id="vuosi" type="date" name="vuosi" className="form-control form-control-lg" placeholder="Syötä syntymävuosi muodossa: YYYY-MM-DD" value={vuosi} onChange={(event) => setVuosi(event.target.value)}/>
                           <div className="invalid-feedback">Täytä syntymäaika</div>
                 </div>
                 <div className="form-group">
                            <label htmlFor="linkki">Linkki</label>
                                 <input id="linkki" type="text" name="linkki" className="form-control form-control-lg" placeholder="Syötä linkki kuvaan" value={linkki} onChange={(event) => setLinkki(event.target.value)}/>
                                    <div className="invalid-feedback">Syötä linkki</div>
                 </div>
                 <div className="form-group">
                            <label htmlFor="paino">Paino</label>
                                 <input id="paino" type="number" name="paino" className="form-control form-control-lg" placeholder="Syötä urheilijan paino" value={paino} onChange={(event) => setPaino(event.target.value)}/>
                                    <div className="invalid-feedback">Syötä paino</div>
                 </div>

                 <div className="form-group">
                            <label htmlFor="laji">Laji</label>
                                 <input id="laji" type="text" name="laji" className="form-control form-control-lg" placeholder="Syötä urheilijan laji" value={laji} onChange={(event) => setLaji(event.target.value)}/>
                                    <div className="invalid-feedback">Syötä laji</div>
                 </div>

                 <div className="form-group">
                            <label htmlFor="saavutukset">Saavutukset</label>
                                 <input id="saavutukset" type="text" name="saavutukset" className="form-control form-control-lg" placeholder="Syötä urheilijan saavutukset" value={saavutukset} onChange={(event) => setSaavutukset(event.target.value)}/>
                                    <div className="invalid-feedback">Syötä saavutukset</div>
            </div>
                                <input type="submit" value="Submit" className="btn btn-light btn-block" />
            </form>
            </div>
        </div>
         )}
