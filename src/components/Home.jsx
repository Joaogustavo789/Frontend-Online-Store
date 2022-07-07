import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <label
        htmlFor="home"
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
        <input
          id="home"
          type="text"
          name="home"
        />
      </label>
    );
  }
}

export default Home;
