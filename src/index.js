import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import { Global } from './core/context/GlobalContext'
import { ProjectDetailsContext } from './core/context/ProjectDetailsContext';
import { HashRouter } from 'react-router-dom'
import ApplicationRouter from './routes/index'

const root = document.getElementById('root')

ReactDOM.render(
  <HashRouter>
    <Global>
      <ProjectDetailsContext>
            <ApplicationRouter />
      </ProjectDetailsContext>
    </Global>
  </HashRouter>,
  root
)