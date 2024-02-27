import css from './Modal.module.css';

const { Component } = require('react');

class Modal extends Component {
  handleClickEsc = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleClickEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleClickEsc);
  }

  render() {
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={this.props.imgURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
