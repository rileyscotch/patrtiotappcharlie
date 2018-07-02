import App from './app/index';
import Amplify, { Auth } from 'aws-amplify'
import config from './aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure(config)

// export default withAuthenticator(App, true);

export default App
