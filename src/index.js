import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import { Global } from './core/context/GlobalContext'
import { HashRouter } from 'react-router-dom'
import ApplicationRouter from './routes/index'

const root = document.getElementById('root')

ReactDOM.render(
  <HashRouter>
    <Global>
      <ApplicationRouter />
    </Global>
  </HashRouter>,
  root
)