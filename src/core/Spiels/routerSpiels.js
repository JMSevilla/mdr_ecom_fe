import React from 'react'
import {appRouter, appAdminRouter} from '../../routes/router'
class routerSpiels {
    router = [
        {
            router_id : 1,
            router_obj : {
                home : appRouter.Homepage.path,
                admin_dashboard : appAdminRouter.Home.path
            }
        }
    ]
}

export default new routerSpiels()