import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from '../layouts/MainLayout.jsx';
import Home from '../components/home/Home.jsx';
import Dashboard from '../components/dashboard/Dashboard.jsx';
import Profile from '../components/profile/Profile.jsx';

FlowRouter.route('/', {
    name: 'home',
    action() {
        mount(MainLayout, {
            content: (<Home />)
        })
    }
});

FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        mount(MainLayout, {
            content: (<Dashboard />)
        })
    }
});

FlowRouter.route('/profile', {
    name: 'profile',
    action() {
        mount(MainLayout, {
            content: (<Profile />)
        })
    }
});