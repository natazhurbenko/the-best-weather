import {
  REQUESTED_WHEATHER,
  SUCCESSED_WHEATHER,
  FAILED_WHEATHER
} from './actionTypes';

export const getWeather = () => {
  return {
    type: REQUESTED_WHEATHER
  }
};

export const getWeatherSuccess = ( data ) => {
  return {
    type: SUCCESSED_WHEATHER,
    payload: data
  }
};

export const getWeatherFailed = ( error ) => {
   return {
    type: FAILED_WHEATHER,
    payload: error
  }
};

export const fetchWeather = ( count ) => {
  return ( dispatch ) => {
    dispatch( getWeather() );
    fetch( 'https://api.openweathermap.org/data/2.5/box/city?bbox=-90,-180,90,180,10&appid=1afd761758a55a31ab547c64416460aa' )
      .then( response => response.json() )
      .then( data => {
        const lists = data.list;
        const temperature = count;
        const humidity = 50;

        let winners = lists.sort( function( prev, next ) {
          let temporaryPrevTem = Math.abs( prev.main.temp - temperature);
          let temporaryPrevHumidity  = Math.abs( prev.main.humidity - humidity );
          let temporaryNextTemp = Math.abs( next.main.temp - temperature );
          let temporaryNextHumidity  = Math.abs( next.main.humidity - humidity );

          if( temporaryPrevTem > temporaryNextTemp   ) return 1;
          if( temporaryPrevTem < temporaryNextTemp ) return -1;

          if( temporaryPrevHumidity > temporaryNextHumidity ) return 1;
          if( temporaryPrevHumidity < temporaryNextHumidity ) return -1;
        });

        dispatch( getWeatherSuccess( winners  ) )
      })
      .catch( error => dispatch( getWeatherFailed( error ) ) )
  }
}
