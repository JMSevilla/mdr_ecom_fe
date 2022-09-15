import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import { Global } from './core/context/GlobalContext'
import { ProjectDetailsContext } from './core/context/ProjectDetailsContext';
import { AdministratorContext } from './core/context/AdminContext';
import { HashRouter } from 'react-router-dom'
import ApplicationRouter from './routes/index'

import { Provider } from 'react-redux'
import configureStore from './core/redux/configureStore'

const store = configureStore()

const root = document.getElementById('root')

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <Global>
        <ProjectDetailsContext>
            <AdministratorContext>
                <ApplicationRouter />
            </AdministratorContext>
        </ProjectDetailsContext>
      </Global>
    </Provider>
  </HashRouter>,
  root
)