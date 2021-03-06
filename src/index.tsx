import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, RouteComponentProps } from 'react-router-dom';
import Routes from './routes';
import App from './app';

let routes: React.ComponentType<RouteComponentProps<any>> = Routes;

ReactDOM.render(
  <App router={BrowserRouter} routes={routes} />,
  document.getElementById('root') as HTMLElement
);
