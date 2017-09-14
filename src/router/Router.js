import React from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Home from '../component/Home'
import Layout from '../component/Layout'

const BasicExample = () => (
    <Router>
        <Route exact path="/" component={Layout} >
            <Route path="/" component={Home}/>
        </Route>
    </Router>
)


export default BasicExample