import React from "react";
import { selectSong } from "./actions";
import SongDetail from "./components/SongDetail";
import SongList from "./components/SongList";

function App() {
  return (
    <div className="App ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
