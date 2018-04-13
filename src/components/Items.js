import React from 'react';

class Items extends React.Component {
  render(){
    return (<li key={this.props.key}>
        <h2>Nombre: {this.props.name}</h2>
        <p>Genero:{this.props.gender} </p>
        <p>Altura: {this.props.height}</p>
        <div className="card text-white bg-primary mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Primary card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk the cards content.</p>
          </div>
        </div>
        <hr/>
      </li>)

  }
}

export default Items;
