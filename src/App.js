import { Provider } from 'react-redux'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import store from './redux/store'
import SignUpContainer from './components/SignUp/Container'
import OnboardingContainer from './components/Onboarding/Container'
import OnboardingFinalContainer from './components/OnboardingFinal/Container'
import BankStatementContainer from './components/BankStatements/Container'
import CameraContainer  from './components/Camera/Container'
import LocationContainer from './components/Location/Container'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Route path='/' exact component={SignUpContainer}/>
      <Route path='/pan'  component={OnboardingContainer}/>
      <Route path='/gst-aadhar'  component={OnboardingFinalContainer}/>
      <Route path='/next-page'  component={BankStatementContainer}/>
      <Route path='/next-next' component={CameraContainer}/>
      <Route path='/next-final' component={LocationContainer}/>      
    </BrowserRouter>
    </Provider>
  );
}

export default App;
