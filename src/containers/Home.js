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
                    <p>Population: {population.toLocaleString()} {demonym} people</p>
                    <p>Currency Exchange: 1 USD to {currencyExchange} {currencyName}</p>
                </div>
                <div className="CountryInfo_Description">
                    <p>Placement text</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec lobortis ligula. In molestie turpis sit amet rutrum congue. Quisque ac finibus leo. Donec ac quam interdum, efficitur enim ut, tristique nulla. Integer vehicula viverra ex, nec euismod tortor feugiat quis. Nunc sodales dignissim ipsum et pretium. Donec a vestibulum purus. Suspendisse faucibus consectetur metus at fringilla. Nam auctor, metus ut ultrices commodo, est mi tincidunt mauris, ut laoreet massa lectus quis lacus. Proin convallis faucibus dui, vitae convallis nunc. Nulla pulvinar blandit enim ac mattis.</p>
                    <p>Nunc egestas nibh a nulla egestas, ut congue diam eleifend. Mauris ac risus tellus. Maecenas a feugiat est, id bibendum turpis. Sed tellus urna, viverra sit amet velit eu, ullamcorper tempus enim. Vivamus bibendum semper nulla id congue. Fusce et urna ac dolor vulputate rutrum et non sapien. Vivamus vehicula iaculis turpis eu ultrices. Mauris in elit commodo, ullamcorper est et, condimentum lacus. Praesent ultrices velit eu euismod mattis. Nulla facilisi. Vivamus in nisl cursus, lobortis justo ut, interdum elit. Nulla feugiat risus sapien, eget porttitor tortor pellentesque ullamcorper.</p>
                    </div>
            </div>
        </div>


    );
}


export default Home;