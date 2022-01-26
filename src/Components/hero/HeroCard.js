import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({id,superhero,publisher,alter_ego,first_appearance,characters}) => {
  
    const imagePath= `/assets/heroes/${id}.jpg`;

  return <div className="col-4">
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={imagePath} className="img-fluid rounded-start " alt={superhero} />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters)  
                                    && <p className='text-muted'>{ characters }</p>
                            }
                            <p className='card-text'>
                                <small className='text-muted'>{ first_appearance }</small>
                            </p>
                            <Link to={`/hero/${id}`}>
                                Mas...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

}