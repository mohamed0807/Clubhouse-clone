import './App.css';
import Welcome from './Pages/Welcome';
import PlanLayout from './Pages/Layouts/PlanLayout';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import PhoneConfirmation from './Pages/PhoneConfirmation';
import CodeConfirm from './Pages/CodeConfirm';
import AllowNotification from './Pages/AllowNotification';
import AppLayout from './Pages/Layouts/AppLayout';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Profile from './Pages/Profile'
// import 'antd/dist/antd.css'

function App() {
  return (
  <div>
    <BrowserRouter>
      <Route exact path={['/','/invite','/get_username','/code_confirm','/allow_notification',]}>
        
        <PlanLayout>
          <Switch>
            <Route exact path='/' component={Welcome}/>
            <Route exact path='/invite' component={PhoneConfirmation}/>
            <Route exact path='/code_confirm' component={CodeConfirm}/>
            <Route exact path='/allow_notification' component={AllowNotification}/>
          </Switch>
        </PlanLayout>
      </Route>
      <Route exact path={['/home','/explore','/profile']}>
          <AppLayout>
            <Switch >
              <Route exact path='/home' component={()=><Home/>}/>
              <Route exact path='/explore' component={Explore}/>
              <Route exact path='/profile' component={Profile}/>
            </Switch>
          </AppLayout>
      </Route>
    </BrowserRouter>
  </div>
  );
}
export default App;
