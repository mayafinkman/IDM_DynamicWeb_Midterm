import React, { useEffect, useState } from 'react';
import axios from 'axios';

import HeaderImage from "../components/HeaderImage";

import { useHistory } from "react-router-dom";

//currency API key
const currencyKey = 'd0fe77c04641fec80fa30b8edf345a2d';
   

function Home() {

    const [currencyData, setCurrencyData] = useState({});
    const [currencyExchange, setCurrencyExchange] = useState("");
    const [countryData, setCountryData] = useState({});
    const [country, setCountry] = useState("");
    const [capital, setCapital] = useState("");
    const [demonym, setDemonym] = useState("");
    const [population, setPopulation] = useState("");
    const [currencyName, setCurrencyName] = useState("");

    let history = useHistory();

    useEffect(() => {
        let searchParams = history.location.search;
        let urlParams = new URLSearchParams(searchParams);
        let country = urlParams.get('country');
        if (country) {
            setCountry(country);
        }
    }, [history]);
    useEffect(() => {
        axios({
            'method': 'GET',
            'url': 'https://restcountries-v1.p.rapidapi.com/name/norway',
            "headers": {
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"restcountries-v1.p.rapidapi.com",
            "x-rapidapi-key":"ea1a8aed55msh7b3409390931e20p18ad77jsnc94329c27bfe"
            }
            })
            .then(function(response){
                setCountryData(response);
                console.log(country);
            })
            .catch(function(error) {
                console.log(error);
            });      
    }, [country]); 
    
    useEffect(() => { 
        if(countryData.data)
        {
            console.log(countryData.data);
            setCapital(countryData.data[0].capital);
            setPopulation(countryData.data[0].population);
            setCurrencyName(countryData.data[0].currencies);
            setDemonym(countryData.data[0].demonym);
            //console.log(currencyName);
        }

    }, [countryData]);
useEffect(() => {
        axios.get(`http://api.currencylayer.com/live?access_key=${currencyKey}&currencies=${currencyName}&format=1`)
            .then(function(response){
                setCurrencyData(response);
                //console.log(currencyName);
            })
            .catch(function(error) {
                console.log(error);
            });      
    }, [currencyName]); 
useEffect(() => {
    if (currencyData.data)
        {
           // setCurrencyExchange(currencyData.data.quotes.USDNOK);
            //console.log(currencyData);
       //console.log("currency exchange is " + currencyExchange);
        }

    }, [currencyData]);


    return (
        <div className="Home">
            <h2>Welcome to {country}</h2>
            <div className="CountryImage">
                <HeaderImage country={country} /> 
            </div>
            <div className="CountryInfo">
                <div className="CountryInfo_Data">
                    <h6>Country Info</h6>
                    <p>Capital: {capital}</p>
                    <p>Population: {population} {demonym}'<lowercase>s</lowercase></p>
                </div>
            </div>
        </div>


    );
}


export default Home;