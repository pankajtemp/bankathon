import { Provider } from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import store from './redux/store'
import SignUpContainer from './components/SignUp/Container'
import OnboardingContainer from './components/Onboarding/Container'
import OnboardingFinalContainer from './components/OnboardingFinal/Container'

function App() {
  return (
    <Provider store={store}>
    <div>
      {/* <OnboardingFinalContainer/> */}
      <OnboardingContainer />
      {/* <SignUpContainer/> */}
    </div>
    </Provider>
  );
}

export default App;
