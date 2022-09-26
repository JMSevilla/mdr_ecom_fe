import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './core/redux/store';
import './index.css';
import { Global } from './core/context/GlobalContext'
import { ProjectDetailsContext } from './core/context/ProjectDetailsContext';
import {StudentProjectContext} from './core/context/StudentProjectContext';
import { AdministratorContext } from './core/context/AdminContext';
import { HashRouter } from 'react-router-dom'
import ApplicationRouter from './routes/index'
import { Student } from './core/context/StudentContext';

const store = configureStore()

const root = document.getElementById('root')

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <Global>
        <Student>
        <ProjectDetailsContext>
          <StudentProjectContext>
            <AdministratorContext>
                <ApplicationRouter />
            </AdministratorContext>
          </StudentProjectContext>
        </ProjectDetailsContext>
        </Student>
      </Global>
    </Provider>
  </HashRouter>,
  root
)