import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, handleModal }) => {
  return (
    <li
      key={id}
      className={css.gallery_item}
      onClick={() => handleModal(largeImageURL)}
    >
      <img src={webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
