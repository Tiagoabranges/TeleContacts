import React from 'react';
import { FaSync } from 'react-icons/fa';
import './index.css'
class RefreshButton extends React.Component {
  handleRefresh = () => {
    // Recarrega a página
    window.location.reload();
  };

  render() {
    return (
      <button id='atualizar' onClick={this.handleRefresh}>
        <FaSync /> Atualizar
      </button>
    );
  }
}

export default RefreshButton;