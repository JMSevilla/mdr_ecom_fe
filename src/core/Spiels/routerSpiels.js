import React from "react";
import { appRouter, appAdminRouter, appBORouter } from "../../routes/router";
class routerSpiels {
  router = [
    {
      router_id: 1,
      router_obj: {
        home: appRouter.Homepage.path,
        admin_dashboard: appAdminRouter.Home.path,
        business_owner_dashboard: appBORouter.Home.path,
        login: appRouter.SignIn.path,
        admin_settings: appAdminRouter.Settings.path,
        admin_product_mgmt: appAdminRouter.ProductMgmt.path,
        admin_user_mgmt: appAdminRouter.UserMgmt.path,
      },
    },
  ];
}

export default new routerSpiels();
