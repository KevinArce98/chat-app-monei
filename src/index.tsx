import ReactDOM from 'react-dom';
import ChatApp from './ChatApp';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

ReactDOM.render(<ChatApp />, document.getElementById('root'));
