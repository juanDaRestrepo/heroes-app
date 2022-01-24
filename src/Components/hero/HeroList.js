import {getHeroesByPublisher} from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher( publisher )
    console.log(heroes);
    return (
        <div className='mt-2'>
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={hero.id}
                        {...hero} 
                    />
                ))
            }
                          

        </div>
  )
};
