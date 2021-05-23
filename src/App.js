import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App =( )=>{
    return (
        <ChatEngine
          height="100vh"
          projectID={1104af20-8f17-41b4-a65b-b4303108cdda}
          userName= "Admin"
          userSecret="adminpassword"
          renderChatFeed={(chatAppProps)=> <ChatFeed{...chatAppProps}/>}
        />
    )
}


export default App;