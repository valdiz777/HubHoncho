import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Home extends TrackerReact(Component) {
    constructor() {
        super();

        this.state = {
            subscription: {
                resolutions: Meteor.subscribe("userBooks")
            }
        }
    }

    componentWillUnmount() {
        this.state.subscription.resolutions.stop();
    }

    isUserLoggedOn() {
        if (!Meteor.userId()) {
            return false;
        }
        return true;
    }

    setVar() {
        Session.set('Meteor.loginButtons.dropdownVisible', true);
    }

    render() {
        return (
            <div class="billboard">
                <h1>HubHoncho</h1>
                <p>Hubhoncho is a unifying social media platform that provides the convenience and flexibity social
                    media connection....blah blah blah. </p>
                {(this.isUserLoggedOn() === true) ? <h1>Welcome back {Meteor.userId()}</h1> :
                    <button onClick={this.setVar}>Sign Up</button>
                }
            </div>
        )
    }
}