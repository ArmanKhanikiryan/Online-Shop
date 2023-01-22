import {FC} from "react";
import Main from "../pages/Main/Main";

let a = ''
export enum RoutesEnum {
    MAIN = "/",
    LOGIN = "/login",
    REGISTRATION = "/registration",
    ERROR = "error_page",
    PROFILE = "/profile",
    MESSAGES = "/messages",
    EACH_USER_PROFILE = "/users/:userId",
    MESSAGES_WITH_CHAT_ID = "/messages/:chatId",
    LOADING = "/loading",
    SETTINGS = "/settings"
}

export type RouteType = {
    path: RoutesEnum;
    Component: FC;
    type: "public" | "private" | "restricted";
};

export const routes: RouteType[] = [
    {
        path: RoutesEnum.MAIN,
        type: "private",
        Component: Main,
    }
];



export default  a
