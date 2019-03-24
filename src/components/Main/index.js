// @flow
import React from 'react';

import { Spinner } from '../Spinner';
import { Switch } from '../Switch';
import './index.css';

type Props = {
  getWeather: Function,
  onChange: Function,
  isLoading: boolean,
  weather: Array,
  data: Array
}


export const Main = ( props: Props ) => {
  const { isLoading } = props.data;
  const { weather, data } = props;

  const weatherList = data.data && weather.slice(1, 10);
  const winner = weather && weather.slice(0, 1);

  return(
    <div className='main'>
      { !weather
        ?
        <button
          type='button'
          className='btn'
          onClick = { props.getWeather }
        >The Best Weather On Earth</button>
        :
        <div className='container'>
          { !weather ||
            <React.Fragment>
              { isLoading
                ?<Spinner />
                :
                <React.Fragment>
                  <div className='row'>
                    <React.Fragment>{ props.data && winner.map( ( item, index ) => {
                      return(
                        <ul key={ index } className='winner'>
                          <li>
                            <h3>Winner is:</h3>
                            <span className='big'> { item.name } </span>
                          </li>
                          <li> - temperature is: { item.main.temp }</li>
                          <li> -  humidity is: { item.main.humidity }</li>
                        </ul>
                      )
                      }) }</React.Fragment>
                      <div className='checkbox'>
                        <h4>Femail prefer: </h4>
                        <Switch
                          onChange={ props.onChange }
                          checked={ props.checked }
                        />
                      </div>
                  </div>
                  <ul className='list'>
                  { props.data && weatherList.map( ( item, index ) => {
                    return(
                      <li key={ index } className='list__item'>
                        <h4 className='list__ttl'>{ item.name }</h4>
                        <ul className='list-inner'>
                          <li>temperature is: { item.main.temp } </li>
                          <li>humidity is: { item.main.humidity } </li>
                        </ul>
                      </li>
                    )
                  }) }
                  </ul>
                </React.Fragment>
              }
            </React.Fragment>
          }
        </div>
      }
    </div>
  )
}
