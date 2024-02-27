import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ data, handleModal }) => {
  return (
    <ul className={css.gallery}>
      {data.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          id={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          handleModal={handleModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
