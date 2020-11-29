import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "../containers/home";

const Routes = () => {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="*" component={Home} />
    </Switch>
    </Router>
  );
};

export default Routes;
