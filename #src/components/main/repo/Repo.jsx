import React from 'react';
import { NavLink } from 'react-router-dom';
import './repo.less'

const Repo = (props) => {
    const repo = props.repo

    return (
        <div className='repo' key='props.id'>
            <div className='repo__header'>
                <div className='repo__header-name'><NavLink to={`/card/${repo.owner.login}/${repo.name}`}>Repository: {repo.name}</NavLink></div>
                <div className='repo__header-description'>Description: {repo.description}</div>
            </div>
            <div className='repo__other'>
                <a href={repo.html_url} className='repo__link'>Repository link</a>
                <div className='repo__stars'>Number of stars: {repo.stargazers_count}</div>
                <div className='repo__last-commit'>Date of last update: {repo.updated_at.substring(0, repo.updated_at.length - 10)}</div>
            </div>
        </div>
    );
};

export default Repo;