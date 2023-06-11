import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  
export class Gallery extends Component {
  static propTypes = {}

  render() {
    return (
      <div><ImageGallery items={images} /></div>
    )
  }
}

export default Gallery