import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import ApplicationRouter from './routes/index'

const root = document.getElementById('root')

ReactDOM.render(
  <HashRouter>
    <ApplicationRouter />
  </HashRouter>,
  root
)