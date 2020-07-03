import React from 'react';

class TreasureChest extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          secretMessage: 'медведь выпьет рюмку в 8 утра'
        }
    }
    render(){
      return(
        <p>Пиратский сундук</p>
      )
    }
}

export default TreasureChest;