import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Info() {
  return (
    <div className='info'>
      <div className='info__img'></div>
      <div>
        <h1 className='info__name'>Laurent Smith</h1>
        <h3 className='info__position'>Frontend Developer</h3>
        <p className='info__webpage'>laurentsmith.website</p>
        <button className='info__mail'><FontAwesomeIcon icon="fa-regular fa-envelope" />Email</button>
        <button className='info__linkedin'><FontAwesomeIcon icon="fa-regular fa-envelope" />Linkedin</button>
      </div>

    </div>
  )
}

export default Info;
