import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TOKENREDUCER, LOGINREDUCER, ADMINREDUCER } from ".";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export default function store() {
  return configureStore({
    reducer: {
      token: TOKENREDUCER,
      login: LOGINREDUCER,
      admin: ADMINREDUCER,
    },
    middleware: [...customizedMiddleware],
  });
}
