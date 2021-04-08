import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { getDataThunk } from '../redux/widgetReducer';
import { WeatherData } from './WeatherData';
import style from './Widget.module.css'

const WidgetForm = reduxForm({
  form: 'city'
})((props) => {
  return <form onSubmit={props.handleSubmit} className={style.form}>
    <Field component={'input'}
      placeholder={'Название города'}
      name={'city'}
      className={style.input}/>
    <button className={style.button}>Узнать</button>
  </form>
}
)

const Widget = ({ getDataThunk, ...props }) => {

  const onSubmit = (formData) => {
    getDataThunk(formData.city);
  }

  return <div className={style.widget}>
    <div className={style.description}>
      <div className={style.text}>Виджет <br /> погоды</div>
    </div>
    <div className={style.form_center}>
        <WidgetForm onSubmit={onSubmit} />
        <WeatherData {...props} />
    </div>
  </div>
}

const mapStateToProps = (state) => {
  return {
    temp: state.widget.temp,
    feels_like: state.widget.feels_like,
    humidity: state.widget.humidity,
    wind_speed: state.widget.wind_speed
  }
}

export default connect(mapStateToProps, { getDataThunk })(Widget);