import axios from "axios";

export interface IUser {
  id?: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddress;
  phone: string;
  website: string;
  company: IUserCompany
}

export interface IUserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: number;
    lng: number;
  }
}

interface IResponseMessage {
  msg: string;
  status: number;
  statusText: string;
  user?: IUser;
}

class APIUsers {
  public getAll = async () => {
    const res = await axios.get('/api/users/');
    const users: IUser[] = res.data;

    return users;
  }

  public getOneUser = async (idUser: number) => {
    const res = await axios.get(`/api/users/${idUser}`)
    const user: IUser = res.data;

    return user;
  }

  public createUser = async (userData: IUser) => {
    const newUser = await axios.post('/api/users', userData, {
      headers: {
        contentType: 'application/json'
      }
    });
    let response: IResponseMessage = {
      msg: '',
      status: newUser.status,
      statusText: newUser.statusText,
      user: newUser.data,
    };

    if (newUser.status !== 201 && newUser.statusText === 'Created') {
      response.msg = 'An error occurred when trying to add user';
      return response
    }

    response.msg = 'User was added successfully';
    return response;
  }

  public updateUser = async (userData: IUser) => {
    const res = await axios.put(`api/users/${userData.id}`, userData, {
      headers: {
        contentType: 'application/json'
      }
    })
    let response: IResponseMessage = {
      msg: '',
      status: res.status,
      statusText: res.statusText,
      user: userData
    };

    if (res.status !== 200) {
      response.msg = "User was not updated successfully"
    }

    response.msg = 'User was updated successfully'
    return response;
  }

  public deleteUser = async (userId: IUser) => {
    const res = await axios.delete(`api/users/${userId}`)
    let response: IResponseMessage = {
      msg: '',
      status: res.status,
      statusText: res.statusText,
    };

    if (res.status !== 200) {
      response.msg = 'An error occurred when trying to delete the user';
      return response
    }

    response.msg = 'User was deleted successfully';
    return response;
  }
}

export const ApiUsers = new APIUsers();
