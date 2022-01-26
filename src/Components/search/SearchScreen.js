
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import { useMemo } from 'react';


export const SearchScreen = () => {
  
  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);

  const initialForm = {
    searchText: q
  };

  const [ formValues, handleInputChange ] = useForm( initialForm );
  
  const heroesFiltered = useMemo(() => getHeroesByName(q),[q])

  const handleSearch = (e) => {
      e.preventDefault();
      navigate(`?q=${ formValues.searchText }`)
  }
 
  return <div>
            <h1>Search</h1>
            <hr />

            <div className='row'>
              <div className="col-5">
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder='Search a hero'
                    className='form-control'
                    name='searchText'
                    autoComplete='off'
                    onChange={handleInputChange}
                    value={formValues.searchText}
                  />
                  <button
                    type="submit"
                    className='btn btn-outline-primary mt-1 btn-block'
                  >
                      search
                  </button>
                </form>
              </div>

              <div className='col-7'>
                <h4>Resultados</h4>
                <hr />

                {
                  (q === '')
                    ? <div className='alert alert-info'>Search a hero</div>
                    : (heroesFiltered.length === 0) && <div className='alert alert-danger'>No results for: {q}</div>

                }
                {
                  heroesFiltered.map( hero => (
                    <HeroCard 
                      key={hero.id}
                      {...hero}
                      search= {true}
                    />
                  ))
                }
              </div>

            </div>
        </div>;
};