import React from 'react';
import { Admin, Resource } from 'react-admin';
import { RestProvider, AuthProvider, Base64Uploader } from '../lib';

import AboutUs from './AboutUs';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList, UserEdit, UserCreate } from './users';
import Dashboard from './Dashboard';

import NotFound from './NotFound';
import ApproveButton from '../comments/ApproveButton';
// import AuthProvider from './AuthProvider';


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
  approveButton={ApproveButton}
  authProvider={AuthProvider}
  catchAll={NotFound}
  dashboard={Dashboard}
  aboutUs={AboutUs}
  title="EMTest"
  dataProvider={dataProvider} >

    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>

    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon}/>

    {

    }
  </Admin>
);
export default App;
