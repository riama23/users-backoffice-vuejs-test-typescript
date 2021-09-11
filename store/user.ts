import {IUser} from "~/repositories/Users";

export const state = () => ({
  list: [],
  user: {}
})

export const mutations = {
  setList(state: any, list: IUser[]) {
    if (state.list.length) {
      return;
    }

    state.list = list;
  },
  setUser(state: any, user: IUser) {
    state.user = user;
  },

  createUser(state: any, userAdd: IUser) {
    state.list.push(userAdd);
  },

  removeUser(state: any, userDelete: IUser) {
    const index: Number = state.list.findIndex((userIndex: IUser) => userIndex.id === userDelete.id)
    state.list.splice(index, 1);
  },

  updateUser(state: any, user: IUser) {
    state.user = user;
    const index = state.list.findIndex((userIndex: IUser) => userIndex.id === user.id);
    state.list.splice(index, 1);
    state.list.push(user);
  }
}
