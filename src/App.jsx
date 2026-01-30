import { useState } from "react";
import NavBar from "./Navbar/Navbar";
import Body from "./Body";
import Modals from './Modals/Modals'

function App() {
  const [isAddListOpen, setIsAddListOpen] = useState(false);
  const [isIconListOpen, setIconListOpen] = useState(false);

  return (
    <>
      <NavBar onAddList={() => setIsAddListOpen(true)} />

      <Body onChangeIcon={() => setIconListOpen(true)}/>
 
      <Modals isAddListOpen={isAddListOpen} setIconListOpen={setIconListOpen} setIsAddListOpen={setIsAddListOpen} isIconListOpen={isIconListOpen}/>
    </>
  );
}

export default App;
