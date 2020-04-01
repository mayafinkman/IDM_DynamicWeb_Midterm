import React, { useEffect, useState } from 'react';
import axios from 'axios';

import HeaderImage from "../components/HeaderImage";
import InfoText from "../components/InfoText";
import WelcomeIcon from "../components/WelcomeIcon";

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
    const [currencyConcat, setCurrencyConcat] = useState("");
    const [location, setLocation] = useState("");
    const [nativeName, setNativeName] = useState("");
    const [language, setLanguage] = useState("");

    let history = useHistory();

    useEffect(() => {
        let searchParams = history.location.search;
        let urlParams = new URLSearchParams(searchParams);
        let countryValue = urlParams.get('country');
        if (countryValue) {
            setCountry(countryValue);
        }
    }, [history]);
    useEffect(() => {
        axios({
            'method': 'GET',
            'url': `https://restcountries-v1.p.rapidapi.com/name/${country}`,
            "headers": {
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"restcountries-v1.p.rapidapi.com",
            "x-rapidapi-key":"ea1a8aed55msh7b3409390931e20p18ad77jsnc94329c27bfe"
            }
            })
            .then(function(response){
                setCountryData(response);
                //console.log(country);
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
            setCurrencyName(countryData.data[0].currencies[0]);
            setCurrencyConcat("USD" + String(countryData.data[0].currencies[0]))
            setDemonym(countryData.data[0].demonym);
            setLocation(countryData.data[0].subregion);
            setNativeName(countryData.data[0].nativeName);
            
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
        setCurrencyExchange(String(currencyData.data.quotes[currencyConcat]));
        //console.log(currencyData);
        // console.log(currencyName);
        // console.log(currencyConcat);
        //console.log("currency exchange is " + currencyExchange);
        }

    }, [currencyData]);


    return (
        <div className="Home">
            <div className="CountryWelcome">
                <h2>Welcome to {country}!</h2>
                <WelcomeIcon country={country} />
            </div>
            <div className="CountryImage">
                <HeaderImage country={country} /> 
            </div>
            <div className="CountryInfo">
                <div className="CountryInfo_Data">
                    <h3>Country Info</h3>
                    <p>{nativeName} to natives</p>
                    <p>Capital: {capital}</p>
                    <p>Population: {population.toLocaleString()} {demonym} people</p>
                    <p>Currency Exchange: 1 USD to {currencyExchange} {currencyName}</p>
                    <p>Located in {location}</p>
                </div>
                <div className="CountryInfo_Description">
                    <InfoText country={country}/>
                </div>
            </div>
        </div>


    );
}


export default Home;