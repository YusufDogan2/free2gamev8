import React, { useEffect, useState } from 'react';
import './Home.css';
import GameCard from '../../components/GameCard/GameCard';

export default function Home() {
    const [recentGames, setRecentGamesArray] = useState([]);
    const [topPc, setTopPcArray] = useState([]);
    const [topBrowser, setTopBrowserArray] = useState([]);
    //=====================First======================================
    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_KEY,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date', options)
            .then(response => response.json())
            .then(recentGames => setRecentGamesArray(recentGames))
            .catch(err => console.error(err));

    });
    const recentlyAddedGames = recentGames.slice(0, 4);
    //======================Second£===================================

    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_KEY,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&sort-by=popularity', options)
            .then(response => response.json())
            .then(topPcGames => setTopPcArray(topPcGames))
            .catch(err => console.error(err));

    });
    const Top4PcGames = topPc.slice(0, 4);
    //================================================================
    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_KEY,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&sort-by=popularity', options)
            .then(response => response.json())
            .then(topBrowserGames => setTopBrowserArray(topBrowserGames))
            .catch(err => console.error(err));

    });
    const Top4BrowserGames = topBrowser.slice(0, 4);
    //================================================================
    return (
        <div className='Home'>
            <section className='Hero'>
                <h1 className='HeroTitle'>FIND & TRACK THE BEST FREE-TO-PLAY GAMES!</h1>
            </section>

            <section className='Recently Added'>
                <h2>Recently Added</h2>
                <div className='homeFlexContainer'>
                    {recentlyAddedGames.map((game, index) => {
                        return <GameCard key={index} thumbnail={game.thumbnail} title={game.title} short_description={game.short_description} platform={game.platform} genre={game.genre} id={game.id} />;
                    })}
                </div>
            </section>

            <section className='Top4Pc'>
                <h2>Top 4 Games for PC in DATE</h2>
                <div className='homeFlexContainer'>
                    {Top4PcGames.map((game, index) => {
                        return <GameCard key={index} thumbnail={game.thumbnail} title={game.title} platform={game.platform} genre={game.genre} id={game.id} />;
                    })}
                </div>
            </section>

            <section className='Top4Browser'>
                <h2>Top 4 Games for Browser in DATE</h2>
                <div className='homeFlexContainer'>
                    {Top4BrowserGames.map((game, index) => {
                        return <GameCard key={index} thumbnail={game.thumbnail} title={game.title} platform={game.platform} genre={game.genre} id={game.id} />;
                    })}
                </div>
            </section>
        </div>
    );
};

