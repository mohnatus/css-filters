import React from 'react';
import { connect } from 'react-redux';
import { changeImage, loadImage } from '../redux/actions/imageActions';
import Images from '../components/Image/Images'
import Select from '../components/Image/Select'

function Image({ applied, current, custom, changeImage, loadImage }) {
  return (
    <>
      <Images url={current} applied={applied} />
      <Select current={current} custom={custom} onChange={changeImage} onLoad={loadImage} />
    </>
  );
}

const mapStateToProps = ({ image }) => {
  return {
    ...image
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeImage: (url) => {
      dispatch(changeImage(url));
    },
    loadImage: (url) => {
      dispatch(loadImage(url));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Image);
