import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import { Global } from './core/context/GlobalContext'
import { ProjectDetailsContext } from './core/context/ProjectDetailsContext';
import {StudentProjectContext} from './core/context/StudentProjectContext';
import { AdministratorContext } from './core/context/AdminContext';
import { HashRouter } from 'react-router-dom'
import ApplicationRouter from './routes/index'
import { Student } from './core/context/StudentContext';

const root = document.getElementById('root')

ReactDOM.render(
  <HashRouter>
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
   
  </HashRouter>,
  root
)