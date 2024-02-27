import { getImagesApi } from 'api/images';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

const { Component } = require('react');

class App extends Component {
  state = {
    search: '',
    images: [],
    isLoading: false,
    isLoadMore: false,
    page: 1,
    isShowModal: false,
    imgModal: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.getImages();
    }
  }

  getImages = async () => {
    try {
      this.setState({ isLoading: true, isLoadMore: false });
      const { hits, totalHits } = await getImagesApi(
        this.state.search,
        this.state.page
      );
      this.setState(prev => ({
        images: [...prev.images, ...hits],
        isLoadMore: this.state.page < Math.ceil(totalHits / 12),
      }));
    } catch (error) {
    } finally {
      this.setState({ isLoading: false });
    }
  };

  getSearchRequest = search => {
    this.setState({ search, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  toggleModal = () =>
    this.setState(prev => ({ isShowModal: !prev.isShowModal }));

  handleModal = img => {
    this.setState({ imgModal: img, isShowModal: true });
  };

  render() {
    const { images, isLoading, isLoadMore, isShowModal, imgModal } = this.state;
    return (
      <>
        <Searchbar getSearchRequest={this.getSearchRequest} />
        <ImageGallery data={images} handleModal={this.handleModal} />
        {isLoading && <Loader text="Loading..." />}
        {isLoadMore && <Button handleLoadMore={this.handleLoadMore} />}
        {isShowModal && (
          <Modal imgURL={imgModal} toggleModal={this.toggleModal} />
        )}
      </>
    );
  }
}

export default App;
