import { createSelector } from "reselect"

export const loginStatus = (state) => state.users.LoginStatus

export const userProfile = (state) => state.users.userInfo.profileOfUser


