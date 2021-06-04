import './card.less'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getCurrentRepo, getContributors } from '../actions/repos'

const Card = (props) => {
    const { username, reponame } = useParams()
    const [repo, setRepo] = useState({owner: {}})
    const [contributors, setContributors] = useState([])

    useEffect(() => {
        getCurrentRepo(username, reponame, setRepo)
        getContributors(username, reponame, setContributors)
    }, [])

    return (
        <div>
            <button onClick={() => props.history.goBack()}>Back</button>

            <div className='card'>
                <div className='card__main'>
                    <img className='card__img' src={repo.owner.avatar_url} alt='avatar' />
                    <div className='card__name'>Name: {repo.name}</div>
                    <div className='card__stars'>Stars: {repo.stargazers_count}</div>
                </div>

                <div className='card__contributors'>
                    <div>Contributors:</div>
                    {contributors.map((item, index) =>
                        <div key={index}>{item.login}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card