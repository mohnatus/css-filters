import img1 from '../../images/1.jpg';
import img2 from '../../images/2.jpg';
import img3 from '../../images/3.jpg';
import img4 from '../../images/4.jpg';
import img5 from '../../images/5.jpg';

const images = [img1, img2, img3, img4, img5];

images.forEach(img => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = img;
  document.head.appendChild(link);
})

export default images;
