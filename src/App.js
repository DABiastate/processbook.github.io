import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { useState, useRef } from "react";
import Popup from "./components/Popup";
import ProcessBookVideoSnippet from "./components/ProcessBookSnippetVideo"
import { CSSTransition } from "react-transition-group";
import ProcessBookSnippet from "./components/ProcessBookSnippet";
import testImage from './assets/images/test.jpg'
import DjBoardScreenshot from './assets/images/Dj-board-screenshot.png'
import DjBoard4SongsVideo from './assets/images/20230420-dj-board-4-songs.MOV'
import UserTestingVideo from './assets/images/20230421-user-testing-waveform-audio.MOV'
import CRT from './assets/images/crt.png'
import CRTcolor from './assets/images/crt-color.png'
import RachelBoard from './assets/images/RachatBoard.jpg'
import Usertestingdateonboard from './assets/images/Usertestingdateonboard.jpg'
import MatlabgenerationdataRGB from './assets/images/matlab-generation-data_rgb.png'
import MatlabgenerationdataRGBsort from './assets/images/matlab-generation-data_rgbSort.png'
import TomasPosterboard from './assets/images/TomasPosterboard.jpg'
import Aydenonposterboard from './assets/images/Aydenonposterboard.jpg'
import CossetteandParker from './assets/images/CossetteandParker.jpg'
import CossetteLizShelby from  './assets/images/CossetteLizShelbyDj.jpg'
import BrainMascot from './assets/images/the-brain.png'
import SongBrainstorm from './assets/images/SongBrainstorm.jpg'
import SongBrainstorm2 from './assets/images/SongBrainstorm2.jpg'
import SongBrainstorm3 from './assets/images/SongBrainstorm3.jpg'
import SongBrainstorm4 from './assets/images/SongBrainstorm4.jpg'
import Rachelatboard2 from './assets/images/Rachelatboard2.jpg'
import Groupworksess1 from './assets/images/Groupworksess1.jpg'
import Groupworksess2 from './assets/images/Groupworksess2.jpg'
import Groupworksess3 from './assets/images/Groupworksess3.jpg'
import Groupworksess4 from './assets/images/Groupworksess4.jpg'
import Groupworksess5 from './assets/images/Groupworksess5.jpg'
import Groupworksess6 from './assets/images/Groupworksess6.jpg'
import DibalsiTalk from './assets/images/DibalsiTalk.JPG'
import JunoMeme from './assets/images/JunoMeme.jpg'
import Cossettewithhelp1 from './assets/images/Cossettewithhelp1.jpg'
import Cossettewithhelp2 from './assets/images/Cossettewithhelp2.jpg'
import Cossettewithhelp3 from './assets/images/Cossettewithhelp3.jpg'
import TODOwhiteboard from './assets/images/TODOwhiteboard.jpg'
import Studyboard from './assets/images/Studyboard.jpg'
import Studyboard2 from './assets/images/Studyboard2.jpg'
import Rachelatnoonboard from './assets/images/Rachelatnoonboard.jpg'
import Qrcodeboard from './assets/images/Qrcodeboard.jpg'
import ParkerMeme from './assets/images/ParkerMeme.jpg'
import Parkerdesign from './assets/images/Parkerdesign.jpg'
import ParkerCossette1 from './assets/images/ParkerCossette1.jpg'
import ParkerCossette2 from './assets/images/ParkerCossette2.jpg'
import ParkerCossette3 from './assets/images/ParkerCossette3.jpg'
import NoonTeamMeeting1 from './assets/images/NoonTeamMeeting1.jpg'
import NoonTeamMeeting2 from './assets/images/NoonTeamMeeting2.jpg'
import Liz from './assets/images/Liz.jpg'
import group from './assets/images/group.jpg'
import group2 from './assets/images/group2.jpg'
//import cosette-whiteboard from ./assets/images/cosette-whiteboard.HEIC
import Teampic from './assets/images/Team pic.jpg'
import json_captions from  "./assets/image-caption.json";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const nodeRef = useRef(null)

  const handlePopupOpen = () => {
    setShowPopup(true);
    console.log("in handle popup open");
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    console.log("in handle popup close");
  };

  return (
    <div className="App">
      <Header onPopupOpen={handlePopupOpen} />
      <CSSTransition in={showPopup} timeout={300} classNames="popup" unmountOnExit>
        <Popup showPopup={showPopup} popupClose={handlePopupClose} />
      </CSSTransition>
      <HeroSection />
      <ProcessBookSnippet imageSource={testImage} caption={json_captions.process1}/>
      <ProcessBookSnippet imageSource={DjBoardScreenshot} caption={json_captions.DjBoardScreenshot}/>
      <ProcessBookSnippet imageSource={CRTcolor} caption={json_captions.CRTcolor}/>
      <ProcessBookSnippet imageSource={MatlabgenerationdataRGB} caption={json_captions.MatlabgenerationdataRGB}/>
      <ProcessBookSnippet imageSource={MatlabgenerationdataRGBsort} caption={json_captions.MatlabgenerationdataRGBsort}/>
      <ProcessBookSnippet imageSource={TomasPosterboard} caption={json_captions.TomasPosterboard}/>
      <ProcessBookSnippet imageSource={Aydenonposterboard} caption={json_captions.Aydenonposterboard}/>
      <ProcessBookSnippet imageSource={CossetteandParker} caption={json_captions.CossetteandParker}/>
      <ProcessBookSnippet imageSource={CossetteLizShelby} caption={json_captions.CossetteLizShelby}/>
      <ProcessBookSnippet imageSource={BrainMascot} caption={json_captions.BrainMascot}/>
      <ProcessBookSnippet imageSource={SongBrainstorm4} caption={json_captions.SongBrainstorm4}/>
      <ProcessBookSnippet imageSource={Rachelatboard2} caption={json_captions.Rachelatboard2}/>
      <ProcessBookSnippet imageSource={Groupworksess1} caption={json_captions.Groupworksess1}/>
      <ProcessBookSnippet imageSource={Groupworksess2} caption={json_captions.Groupworksess2}/>
      <ProcessBookSnippet imageSource={Groupworksess3} caption={json_captions.Groupworksess3}/>
      <ProcessBookSnippet imageSource={Groupworksess4} caption={json_captions.Groupworksess4}/>
      <ProcessBookSnippet imageSource={Groupworksess5} caption={json_captions.Groupworksess5}/>
      <ProcessBookSnippet imageSource={Groupworksess6} caption={json_captions.Groupworksess6}/>
      <ProcessBookSnippet imageSource={JunoMeme} caption={json_captions.JunoMeme}/>
      <ProcessBookSnippet imageSource={Cossettewithhelp3} caption={json_captions.Cossettewithhelp3}/>
      <ProcessBookSnippet imageSource={TODOwhiteboard} caption={json_captions.TODOwhiteboard}/>
      <ProcessBookSnippet imageSource={Studyboard2} caption={json_captions.Studyboard2}/>
      <ProcessBookSnippet imageSource={Rachelatnoonboard} caption={json_captions.Rachelatnoonboard}/>
      <ProcessBookSnippet imageSource={Parkerdesign} caption={json_captions.Parkerdesign}/>
      <ProcessBookSnippet imageSource={ParkerCossette3} caption={json_captions.ParkerCossette3}/>
      <ProcessBookSnippet imageSource={NoonTeamMeeting2} caption={json_captions.NoonTeamMeeting2}/>
      <ProcessBookSnippet imageSource={Liz} caption={json_captions.Liz}/>
      <ProcessBookSnippet imageSource={group2} caption={json_captions.group2}/>
      <ProcessBookVideoSnippet imageSource={DjBoard4SongsVideo} caption={json_captions.DjBoard4SongsVideo}/>
      <ProcessBookVideoSnippet imageSource={UserTestingVideo} caption={json_captions.UserTestingVideo}/>
      <ProcessBookSnippet imageSource={Teampic} caption={json_captions.Teampic}/>
    </div>
  );
}
export default App;
