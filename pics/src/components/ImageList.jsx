import React from 'react';

class ImageList extends React.Component {
  
  render() {
    const images = this.props.images.map((image) => {
      return <img alt="car" key={image.id} src={image.urls.small}/>
    });

    return images;
  }
}

export default ImageList;