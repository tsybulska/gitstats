import React from 'react';
import './repo.less'

const Repo = (props) => {
    const repo = props.repo

    return (
        <div className="repo" key="props.id">
            <div className="repo__header">
                <div className="repo__header-name">Repository name: {repo.name}</div>
                <div className="repo__header-description">Description: {repo.description}</div>
            </div>
            <div className="repo__other">
                <div className="repo__stars">Number of stars: {repo.stargazers_count}</div>
                <div className="repo__last-commit">Date of last update: {repo.updated_at.substring(0, repo.updated_at.length - 10)}</div>
                <a href={repo.html_url} className="repo__link">Repository link</a>
            </div>
        </div>
    );
};

export default Repo;