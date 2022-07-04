import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    
    return (
    
        <>
        <div className='logoban'>
            <img className='logo' src='./logoc.png' alt='logo' />
            <h1>Les Recettes de Colette</h1>
        </div>
        <div className='nav'>
            <Link className='liens' to='/'>Home</Link>
        {props.data?.map((lien)=>
        <Link className='liens' to={`/${lien.title}`}>{lien.title}</Link>)}
            
        </div>
        
    
        </>

    );
};

export default Header;