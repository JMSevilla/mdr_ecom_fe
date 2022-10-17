import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../../../../core/context/GlobalContext";
import { useHistory } from "react-router-dom";
import { localstoragehelper } from "../../../../core/utils/storage";
import Dashboard from '../Contents/Dashboard';

export default function HomeFieldDDashboard() {
  const globalcontextValues = useContext(GlobalContext);
  const { token, tokenScanned, settings } = globalcontextValues;
  const key = localstoragehelper.load("key_identifier");
  const authtoken = localstoragehelper.load("appid");
  const history = useHistory();

  useEffect(() => {
    const tempAllFieldSelected = [...settings];
    const tempFieldSelected = { ...tempAllFieldSelected[0] };
    if (!key || !authtoken) {
      history.push(tempFieldSelected.router_obj.login);
    } else {
      tokenScanned(0);
    }
  }, [key]);
  return (
        <Dashboard />
  );
}
