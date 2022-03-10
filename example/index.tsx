import ReactDOM from 'react-dom';
import React from 'react'
import App from './App';
import './style.less';
import coverImage from '../cover-image/coverImage.png';

const img = new Image();
img.src = coverImage;

ReactDOM.render(<App />, document.body);

export default {}