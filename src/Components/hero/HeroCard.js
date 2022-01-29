import React from 'react';
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';



export const HeroCard = ({id,superhero,publisher,alter_ego,first_appearance,characters,search}) => {
  
   

  return <div className={search?'col-12 animate__animated animate__fadeIn':'col-4 animate__animated animate__fadeIn'}>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={heroImages(`./${id}.jpg`)} className="img-fluid rounded-start " alt={superhero} />
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