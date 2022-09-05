import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import { Global } from './core/context/GlobalContext'
import { ProjectDetailsContext } from './core/context/ProjectDetailsContext';
import { AdministratorContext } from './core/context/AdminContext';
import { HashRouter } from 'react-router-dom'
import ApplicationRouter from './routes/index'

const root = document.getElementById('root')

ReactDOM.render(
  <HashRouter>
    <Global>
      <ProjectDetailsContext>
           <AdministratorContext>
              <ApplicationRouter />
           </AdministratorContext>
      </ProjectDetailsContext>
    </Global>
  </HashRouter>,
  root
)