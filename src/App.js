import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App =( )=>{
    return (
        <ChatEngine
          height="100vh"
          projectID=" "
          userName= "Admin"
          userSecret="adminpassword"
          renderChatFeed={(chatAppProps)=> <ChatFeed{...chatAppProps}/>}
        />
    )
}


export default App;