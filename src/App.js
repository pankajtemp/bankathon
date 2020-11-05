import { Provider } from 'react-redux'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import store from './redux/store'
import SignUpContainer from './components/SignUp/Container'
import OnboardingContainer from './components/Onboarding/Container'
import OnboardingFinalContainer from './components/OnboardingFinal/Container'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Route path='/' exact component={SignUpContainer}/>
      <Route path='/pan' exact component={OnboardingContainer}/>
      <Route path='/gst-aadhar' exact component={OnboardingFinalContainer}/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
