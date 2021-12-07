import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import urheilijatiedotContext from "../context/UrheilijatiedotContext";
import { useNavigate } from "react-router-dom";


const Urheilijatieto = (props) => {
     const UrheilijatiedotContext = useContext(urheilijatiedotContext); //hooks
     let history = useNavigate();
     const [naytaUrheilijatieto, setnaytaUrheilijatieto] = useState(false);
     const onDeleteClick = (id) => {
       UrheilijatiedotContext.poistaUrheilijatieto(id);
       window.location.reload();
       history("/");
      };
     const onShowClick = (e) => {
        let lippu = !naytaUrheilijatieto;
        setnaytaUrheilijatieto(lippu);
     };
     const { id, nimi, vuosi, paino, linkki, saavutukset, laji } = props.urheilijatieto;
     return (
     <div className="card card-body mb-3">
     <h4>
     {nimi}{" "}
     <button className="button" onClick={onShowClick.bind(this)}>
     Näytä tiedot
     </button>
     <button className="button_right" onClick={onDeleteClick.bind(this, {id})}> Poista </button>
     <Link to={`urheilijatieto/muokkaa/${id}`}>
     <button className="button_right">Muokkaa</button>
     </Link>
     </h4>
     {naytaUrheilijatieto ? (
       <ul className="list-group">
         <li className="list-group-item">Urheilija: {nimi}</li>
         <li className="list-group-item">Laji: {laji}</li>
         <li className="list-group-item">Saavutukset: {saavutukset}</li>
         <li className="list-group-item">Paino: {paino}</li>
         <li className="list-group-item">Syntymävuosi: {vuosi}</li>
         <li className="list-group-item">Linkki kuvaan: {linkki}</li>
       </ul>
     ) : null}
     </div>
     );
};

export default Urheilijatieto;