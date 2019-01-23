import React, { createElement } from 'react';
import { Admin, Resource } from 'react-admin';
import { RestProvider, AuthProvider, Base64Uploader } from '../lib';


import { PostList, PostEdit, PostCreate } from './posts';
import { UserList, UserEdit, UserCreate } from './users';
import Dashboard from './Dashboard';
import NotFound from './NotFound';


import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const firebaseConfig = {
  apiKey: "AIzaSyCFbXNahyd1f04ruJYAU0ArZ5tHi8GZXkA",
  authDomain: "friendlychat-ba94e.firebaseapp.com",
  databaseURL: "https://friendlychat-ba94e.firebaseio.com",
  projectId: "friendlychat-ba94e",
  storageBucket: "",
  messagingSenderId: ""
};

const trackedResources = [{ name: 'posts', isPublic: true }, { name: 'users', isPublic: true }];

const authConfig = {
  userProfilePath: '/users/',
  userAdminProp: 'isAdmin'
};

const dataProvider = Base64Uploader(RestProvider(firebaseConfig, { trackedResources }));
const App = () => (
  <Admin


  catchAll={NotFound}
  dashboard={Dashboard}
  title="EMTest"
  dataProvider={dataProvider} >

    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
  </Admin>
);
export default App;
