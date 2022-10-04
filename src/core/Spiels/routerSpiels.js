import React from 'react'
import {appBORouter, appRouter} from '../../routes/router'
class routerSpiels {
    router = [
        {
            router_id : 1,
            router_obj : {
                home : appRouter.Homepage.path,
                bo_dashboard: appBORouter.Home.path
            }
        }
    ]
}

export default new routerSpiels()