import s from "./style.module.css"
import "./global.css"
import { TvShowApi } from "./API/tv-show";
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { TvShowDetail } from "./components/TvShowDetail/TvShowDetail";
import { Logo } from "./components/Logo/Logo";
import logo from "./assets/images/logo.png"
import { TvShowListItem } from "./components/TvShowListItem/TvShowListItem";
import { TvShowList } from "./components/TvShowList/TvShowList";
import { SearchBar } from "./components/SearchBar/SearchBar"

function App() {

const  [currentTvShow, setCurrentTvShow] = useState();
const  [recommendationList, setRecommendationList] = useState([]);

function updateCurrentTvShow(currentShow){
  setCurrentTvShow(currentShow);
}

async function getRecommendations(){
  const recommendations = await TvShowApi.getRecommendations(currentTvShow.id);
  if(recommendations.length > 0){
    setRecommendationList(recommendations.slice(0,10));
  }
}

  async function getPopular(){
    const populars = await TvShowApi.fetchPopulars();
    if(populars.length > 0){
     setCurrentTvShow(populars[1]);
    }
   }

   async function searchTvShow(e){
    if (e.key === "Enter" && e.target.value.trim() !== "") {
    const reponse = await TvShowApi.searchTvShow(e.target.value);
    if(reponse.length > 0){
      setCurrentTvShow(reponse[0]);
      e.target.value = "";
    }
   }
  }
   
   useEffect(() => {
     getPopular();
   },[]);

   useEffect(() => {
    if(currentTvShow){
      getRecommendations();
    }
   },[currentTvShow])

  return (
      <div className={s.main_container}
      style={{background : currentTvShow
        ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTvShow.backdrop_path}") no-repeat center / cover`
        : "black"}}>
        <div className={s.header}>
          <div className="row">
            <div className="col-4">
             <Logo image={logo} title="SAitBellaWatch" subtitle="Find the right tv show to watch" getPopular={getPopular}/>
            </div>
            <div className="col-sm-12 col-md-4">
              <SearchBar onSubmit={searchTvShow}/>
            </div>
          </div>
        </div>
        <div className={s.tv_show_detail}>
          {currentTvShow && <TvShowDetail tvShow={currentTvShow}/>}
          </div>
        <div className={s.tv_shows_suggestions}>
          {currentTvShow && <TvShowList recommendationsList={recommendationList} updateShowFunction={updateCurrentTvShow}/>}
          </div>
      </div>
  );
}

export default App;
