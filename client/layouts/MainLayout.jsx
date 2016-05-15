import React from 'react';
import AccountsUI from '../lib/AccountsUI';

export const MainLayout = ({content}) => (
    <div className="main-layout">
        <header>
            <a href="/">
                <h2>HubHoncho</h2>
            </a>
            <nav>
                <a href="/profile">Profile</a>
                <a href="/dashboard">Dashboard</a>
                <AccountsUI />
            </nav>
        </header>
        <main>
            {content}
        </main>
    </div>
);
