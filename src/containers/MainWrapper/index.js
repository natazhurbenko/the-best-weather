//@flow
import React, { Component } from 'react';
import { connect } from  'react-redux';

import { Main } from '../../components/Main';
import { fetchWeather } from '../../actions';


type Props = {
  user: Object,
}

type State = {
  checked: boolean
}

class MainWrapper extends Component<Props, State> {
  constructor( props ) {
    super( props );

    this.state = {
      checked: false
    }
  }

  onChange = ( event ) => {
    this.setState( { checked: !this.state.checked }, () => {
      const degree = this.state.checked ? 22 : 21;
      this.props.getWeatherAction( degree );
    })
  }

  getWeather = () => {
    this.props.getWeatherAction( 21 );
  }

  render() {
    return(
      <Main
        weather={ this.props.data.data }
        getWeather={ this.getWeather }
        onChange={ this.onChange }
        checked={ this.state.checked }
        { ...this.props }
      />
    )
  }
};


const mapStateToProps = store => {
  return {
    data: store
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getWeatherAction: ( count ) => dispatch( fetchWeather( count ) )
  }
};

export const ConnectedMain = connect( mapStateToProps, mapDispatchToProps )( MainWrapper );
