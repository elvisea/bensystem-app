// import React, { useState, useEffect } from 'react';
import React from 'react';
// import api from '../../services/api';
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
// import studyIcon from '../../assets/images/icons/study.svg'
// import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
// import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css';

const Landing: React.FC = () => {
    // const [totalConnections, setTotalConnections] = useState(0);
    // const [userName, setUserName] = useState();

    // useEffect(() => {
    //     api.get('connections').then(response => {
    //         const { total } = response.data;

    //         setTotalConnections(total);
    //     })

        // api.get('accounts/credentials', {params: {email: user?.email}}).then(response => {
        //     const { username } = response.data;

        //     setUserName(username);
        //     console.log(username);
        // })
    // }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Olá! Seja Bem-Vindo a Plataforma Ben System</h2>
                </div>

                <img src={landingImg} alt="Plataforma Ben System" className="hero-image" />

                <div className="buttons-container">
                    <Link to="orcamento" className="study">
                        {/* <img src={studyIcon} alt="Orçamento" /> */}
                        Orçamento
                    </Link>

                    <Link to="chamado" className="give-classes">
                        {/* <img src={giveClassesIcon} alt="Manutenção" /> */}
                        Chamado
                    </Link>
                </div>
                {/* <span className="total-connections">
                    Total de {totalConnections} conexoes já realizadas <img src={purpleHeartIcon} alt="Coração Roxo" />
                </span> */}
            </div>
        </div>
    )
}

export default Landing;