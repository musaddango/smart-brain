import React, { memo } from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {
        box.map((faceRegion, i) => <div key={i} className='bounding-box' style={{top: faceRegion.topRow, right: faceRegion.rightCol, bottom: faceRegion.bottomRow, left: faceRegion.leftCol}}></div>)
        }
      </div>
    </div>
  );
}

export default FaceRecognition;