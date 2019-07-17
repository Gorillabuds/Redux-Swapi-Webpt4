import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {fetchChars} from "../actions";
import{fetchHome} from'../actions';

class CharacterListView extends React.Component {
 

  componentDidMount() {
    // call our action
    this.props.fetchChars();
    this.props.fetchHome();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h2>Loading...TEST</h2>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps=state=>{
  console.log('state',state.charsReducer.characters)
  return{
    characters:state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    home:state.homeReducer.homeworld,
    fetching:state.homeReducer.fetching
  }
}
export default connect(
  mapStateToProps,
  {
    fetchChars,
    fetchHome
  }
)(CharacterListView);
