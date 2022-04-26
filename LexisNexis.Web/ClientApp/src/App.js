import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { BlogList } from './components/BlogList';


import './custom.css'
import { Blog } from './components/Blog';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
        <Route exact path='/' component={BlogList} />
        <Route path='/blog' component={Blog}/>
      </Layout>
    );
  }
}
