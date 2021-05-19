import './app.less'
import React from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Main from './main/Main'

const App = () => {
    const dispatch = useDispatch()

    return (
        <BrowserRouter>
            <div className="container">
                <h1>ReactJS Github Statistics</h1>
                <a className="link" href="https://tsybulska.github.io/" target="_blank" rel="nofollow noopener">Developed by Olena Tsybulska</a>
                <Route path="/" component={Main}/>
            </div>
        </BrowserRouter>
    )
}

export default App;