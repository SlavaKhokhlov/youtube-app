//import React from 'react';
import React, { Component } from 'react';

//const SearchBar = () => {
//    return <input />
//};

//class SearchBar extends React.Component {
class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = { term: ''};
    }
    
    render() {
        //return <input onChange={ this.onInputChange } />;
        //return <input onChange={ (event) => console.log(event.target.value) } />;
        //return <input onChange={ event => console.log(event.target.value) } />;
        //return <input onChange={ event => this.setState({ term: event.target.value }) } />;
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={ event => this.onInputChange(event.target.value) } />
            </div>
        );
        // ___^^^____
        {/* event => this.setState({ term: event.target.value }) */}
    }
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    //onInputChange(event) {
    //    console.log(event.target.value);
    //}
}

export default SearchBar;