import './App.css';
import {
  Header,
  MailBox,
  SwitchBar,
  ButtonsBar,
  ToggleMenu,
} from './components';
import { useSelector } from 'react-redux';

const App = () => {

  const showToggle = useSelector(state => state.mainSlice.showToggle)

  const mailTemplate = useSelector(state => state.mainSlice.mailTemplate)
  
  return (
    <div className="App">
      <Header/>
      <SwitchBar />
      {
        //switch on olduğunda;
        showToggle &&
        <>
          <ToggleMenu />
          {
            //toggle menude herhangi birisi seçildiginde;
            mailTemplate !== "" &&
            <>
            <MailBox />
            <ButtonsBar />
            </>
          }
          
        </>
      }

    </div>
  );
}

export default App;
