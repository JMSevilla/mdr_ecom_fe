import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TOKENREDUCER, LOGINREDUCER, ADMINREDUCER, STUDENTREDUCER } from ".";
import serverMiddleware from "../middleware/server";
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export default function store() {
  return configureStore({
    reducer: {
      token: TOKENREDUCER,
      login: LOGINREDUCER,
      admin: ADMINREDUCER,
      student : STUDENTREDUCER
    },
    middleware: [...customizedMiddleware, serverMiddleware]
  });
}
