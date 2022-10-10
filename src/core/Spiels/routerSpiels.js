import React from 'react'
import {appRouter, appAdminRouter, appBORouter} from '../../routes/router'
class routerSpiels {
    router = [
        {
            router_id : 1,
            router_obj : {
                home : appRouter.Homepage.path,
                admin_dashboard : appAdminRouter.Home.path,
                business_owner_dashboard : appBORouter.Home.path,
                login : appRouter.SignIn.path
            }
        }
    ]
}

export default new routerSpiels()