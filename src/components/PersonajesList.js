import React from 'react';
import Items from './Items';

class PersonajesList extends React.Component {
  render(){
    return(
      <ul>
        {
          this.props.listado.map((item, i) => {
            console.log(item);
            return <Items key={i}
                          name={item.name}
                          gender={item.gender}
                          height={item.height}/>
          })
        }
      </ul>
    )
  }
}

export default PersonajesList
