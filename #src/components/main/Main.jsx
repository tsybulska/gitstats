import React, { useEffect, useState } from 'react'
import './main.less'
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions/repos'
import Repo from './repo/Repo'
import { setCurrentPage } from '../../reducers/reposReducer'
import { createPages } from '../../utils/pagesCreator'
import { Redirect } from 'react-router';

const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const currentPage = useSelector(state => state.repos.currentPage)
    const totalCount = useSelector(state => state.repos.totalCount)
    const perPage = useSelector(state => state.repos.perPage)
    const isFetchError = useSelector(state => state.repos.isFetchError)
    const [searchValue, setSearchValue] = useState('')
    const pagesCount = Math.ceil(totalCount / perPage)
    const pages = []
    createPages(pages, pagesCount, currentPage)

    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage))
    }, [currentPage])

    function searchHandler() {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue, currentPage, perPage))
    }

    return (
        <div>
            {
                isFetchError && alert('ERROR. PLEASE RELOAD THIS PAGE')
            }

            <h1>ReactJS Github Statistics</h1>
            <a className='link' href='https://tsybulska.github.io/' target='_blank' rel='nofollow noopener'>Developed by Olena Tsybulska</a>
            
            <div className='search'>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type='text' placeholder='Input name' className='search__input' />
                <button onClick={() => searchHandler()} style={{borderLeft: 'none', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}>Search</button>
            </div>

            {
                isFetching === false
                ?
                repos.map((repo, index) =><Repo repo={repo} key={index}/>)
                :
                <div className='fetching'></div>
            }

            <div className='pages'>
                {pages.map((page, index) => <span
                    key={index}
                    className={currentPage == page ? 'current-page' : 'page'}
                    onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
            </div>
        </div>
    );
};

export default Main;