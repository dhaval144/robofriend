import React from 'react';
import 'tachyons';

const Card = ({username, name, email}) =>{
    return(
        <div className="dib ma2 grow br3 pa1 tc bg-light-blue bw2 shadow-5" >
            <img src={`https://robohash.org/${username}?150x150`} alt='robots' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        );
    }
    

export default Card;