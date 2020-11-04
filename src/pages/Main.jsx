import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import uk_UA from 'antd/es/locale-provider/uk_UA';
import 'moment/locale/uk';

import Header from '../components/Header';
import Info from './Info';
import Main2 from './Main2';
import NotFound from './NotFound';
import Survey from './Survey';

const Main = () => {
  return (
    <ConfigProvider locale={uk_UA}>
      <div className="Main">
        <Header />
        <div className="Main__container">
          <Switch>
            <Route exact path="/" component={Main2} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/survey" component={Survey} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Main;