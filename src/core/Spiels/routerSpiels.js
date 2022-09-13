import React from 'react'
import {appRouter} from '../../routes/router'
class routerSpiels {
    router = [
        {
            router_id : 1,
            router_obj : {
                home : appRouter.Homepage.path
            }
        }
    ]
}

export default new routerSpiels()