import { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getSearchRequest(this.state.search);
    e.target.reset();
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <span className="button-label">Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            name="search"
            //   autocomplete="off"
            //   autofocus
            onChange={this.handleInput}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
