import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addCat} from '../actions';


class AddCats extends Component {

    handleClick(){
      console.log("A")
      fetch("http://0.0.0.0:3000/api/v1/ideas")
        .then(res => {
            console.log("B")
            return res.json()
        }).then( data => {
            console.log("C")
        })
        console.log("D")
    }
   
    render() {
        return (
            <div>
                {this.props.cats.map(cat => {
                    return (
                        <div>{cat}</div>
                    )
                })}
            <button
                    onClick={this.handleClick}
                >Add Cat
            </button>

            </div>
        )
    }

}

function mapStateToProps({ cats }) {
    return { cats }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCat: function () {
            dispatch(addCat())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCats);