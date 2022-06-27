import TourPlayer from "./components/TourPlayer";

const { TourScene } = TourPlayer;

import images from "./components/TourPlayer/images/panorama_4.jpg";

const roomName = "trường cao đẳng fpt polytechnic";
const sceneName = "sân trường cao đẳng fpt polytechnic";

const App = () => {
  return (
    <TourPlayer roomName={roomName} onDraggable={(args) => console.log(args)}>
      <TourScene sceneName={sceneName} hfov={120} sceneId="scene1" yaw={-11.538213268378513} pitch={-2.723363721524434} panorama={images} lockPitch>
        <TourScene.Hotspot id="hs1" sceneId="scene1" pitch={-1.6817577380068454} yaw={-7.47775691446502} type="location" tooltip="Đi vào trường" />
        <TourScene.Hotspot id="hs2" sceneId="scene1" pitch={-2.6817577380068454} yaw={-17.47775691446502} type="location" tooltip="Đi vào trường" />
      </TourScene>
    </TourPlayer>
  );
};

export default App;
