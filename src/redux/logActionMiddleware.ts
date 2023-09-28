import { Middleware } from "redux";
import { logAction } from "../metrics/logAction";
import { RootState } from "./store";
import { ProjectActions } from "./actions";

export const logActionMiddleware: Middleware<{}, RootState> = (storeAPI) => {
  return function wrapDispatch(next) {
    return function handleAction(action: ProjectActions) {
      logAction(action)
      next(action)
    }
  }
}