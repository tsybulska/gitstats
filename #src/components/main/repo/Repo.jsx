import React from 'react';
import './repo.less'

const Repo = (props) => {
    const repo = props.repo

    return (
        <div className="repo" key="props.id">
            <div className="repo__header">
                <div className="repo__header-name">Repository name: {repo.name}</div>
                <div className="repo__header-stars">Number of stars: {repo.stargazers_count}</div>
            </div>
            <div className="repo__other">
                <div className="repo__last-commit">Date of last update: {repo.updated_at}</div>
                <a href={repo.html_url} className="repo__link">Repository link</a>
            </div>
        </div>
    );
};

export default Repo;