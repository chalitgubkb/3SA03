import React, { Component } from 'react';
import CharacterCard from './CharacterCard.js';
import _ from 'lodash';
const prepareStateFromWord = (given_word) => {
 let word = given_word.toUpperCase()
 let chars = _.shuffle(Array.from(word))
 return {
 word,
 chars,
 attempt: 1,
 guess: [],
 completed: false
 }
}

export default class WordCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            attempt: '',
        }
    }
    
    componentWillMount(){
        let data = prepareStateFromWord(this.props.value);
        this.setState({
            word : data.word,
            chars: data.chars,
            attempt: data.attempt,
            guess:data.guess,
            completed:data.completed,
        })
    }


    activationHandler = c => { 
        console.log(`${c} has been activated.`) 
    }
    
    render() {
        return (
            <div >
                { Array.from(this.props.value).map((c, i) => 
                    <CharacterCard value={c} key={i} attempt={this.state.attempt}
                    activationHandler={this.activationHandler}/>                    
                )}
            </div>
        );
    }
}