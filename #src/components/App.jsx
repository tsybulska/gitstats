import './app.less'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setCount } from '../reducers/reposReducer'

const App = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.repos.count)

    function onCountClick() {
        dispatch(setCount(5))
    }

    return (
        <div className='app'>
            <button onClick={()=>onCountClick()}>COUNT</button>
            <div>{count}</div>
        </div>
    )
}

export default App;