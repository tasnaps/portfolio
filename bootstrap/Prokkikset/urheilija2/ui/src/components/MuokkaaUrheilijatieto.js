import React, {useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import urheilijatiedotContext from "../context/UrheilijatiedotContext";


const MuokkaaUrheilijatieto = (props) => {
        const [list, setList] = useState([]);
        const [nimi, setNimi] = useState("");
        const [vuosi, setVuosi] = useState("");
        const [paino, setPaino] = useState("");
        const [linkki, setLinkki] = useState("");
        const [laji, setLaji] = useState("");
        const [saavutukset, setSaavutukset] = useState("");
        const { id } = useParams();
        const UrheilijatiedotContext = useContext(urheilijatiedotContext); //hooks

        let history = useNavigate();

        useEffect(() => {
            let mounted = true;
            if(mounted){
                const urheilijatieto = UrheilijatiedotContext.getUrheilijatieto(id).then((res) => {
                    setNimi(res.nimi);
                    setVuosi(res.vuosi);
                    setPaino(res.paino);
                    setLinkki(res.linkki);
                    setLaji(res.laji);
                    setSaavutukset(res.saavutukset);
                });
            }else mounted = false;
            }, []);

            
 const handleSubmit = async (e) => {
     const paivitettyUrheilijatieto = {
         nimi: nimi,
         vuosi: vuosi,
         paino: paino,
         linkki: linkki,
         laji: laji,
         saavutukset: saavutukset
     };

     UrheilijatiedotContext.setUrheilijatieto(id, paivitettyUrheilijatieto);
     history("/");
};
 const onChangeNimi = (e) => {
     setNimi(e.target.value);
 };

 const onChangeVuosi =(e) => {
     setVuosi(e.target.value);
 }
 const onChangePaino =(e) => {
    setPaino(e.target.value);
}
const onChangeLinkki =(e) => {
    setLinkki(e.target.value);
}
const onChangeLaji =(e) => {
    setLaji(e.target.value);
}
const onChangeSaavutukset =(e) => {
    setSaavutukset(e.target.value);
}


 return (
<div className="card mb-3">

    <div className="card-header">Muokkaa urheilijatietoa</div>
    <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
            <div className="form-group">
                <label htmlFor="nimi">Nimi</label>
                    <input type="text" name="nimi" className="form-control form-control-lg" placeholder="Syötä nimi..." value={nimi} onChange={onChangeNimi}
                    />
            </div>

            <div className="form-group">
                <label htmlFor="vuosi">Syntymävuosi</label>
                    <input type="date" name="vuosi" className="form-control form-control-lg" placeholder="Syötä syntymäaika muodossa: YYYY-MM-DD" value={vuosi} onChange={onChangeVuosi} />
            </div>
            
            <div className="form-group">
                <label htmlFor="paino">Paino</label>
                <input type="text" name="paino" className="form-control form-control-lg" placeholder="Syötä paino" value={paino} onChange={onChangePaino} />
            </div>

            <div className="form-group">
                <label htmlFor="linkki">Linkki</label>
                <input type="text" name="linkki" className="form-control form-control-lg" placeholder="Linkki kuvaan" value={linkki} onChange={onChangeLinkki} />
            </div>

            <div className="form-group">
                <label htmlFor="laji">Laji</label>
                <input type="text" name="laji" className="form-control form-control-lg" placeholder="Urheilijan laji" value={laji} onChange={onChangeLaji} />
            </div>

            <div className="form-group">
                <label htmlFor="saavutukset">Saavutukset</label>
                <input type="text" name="saavutukset" className="form-control form-control-lg" placeholder="Urheilijan saavutukset" value={saavutukset} onChange={onChangeSaavutukset} />
            </div>
            <input type="submit" value="Hyväksy tiedot" className="btn btn-light btn-block" />
        </form>
    </div>
</div>
 );
};
export default MuokkaaUrheilijatieto;