import React, {Component} from 'react';

export default class Home extends Component {
    setVar() {
        Session.set('Meteor.loginButtons.dropdownVisible', true);
    }

    render() {
        return (
            <div class="billboard">
                <h1>HubHoncho</h1>
                <p>Hubhoncho is a unifying social media platform that provides the convenience and flexibity social
                    media connection....blah blah blah. </p>
                <button onClick={this.setVar}>Sign Up</button>
            </div>
        )
    }
}