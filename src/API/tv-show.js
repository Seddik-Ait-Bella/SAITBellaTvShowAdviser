import axios from "axios";
import { API_BASE_URL } from "../config";


 export class TvShowApi{

   static async fetchPopulars(){
    try{
      const reponse = await axios.get(`${API_BASE_URL}/tv/popular?language=en-US`,{
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWQyOWY0Zjk0YTQxMjc2MWJlYzFiOTZkMGVkZDVjNyIsIm5iZiI6MTcyMzQxMTg2MC4xMDA4OTQsInN1YiI6IjY2YjdlYWM4ZWY5NmFlNDQzYmYyOWYzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kVD_QxV9i0fmxP7qyAPpXhBZ6jR07IJOwU65g9lIrUE'
              }
        })
        return reponse.data.results;
      }catch(error){
        alert("Une erreur est survenue");
      }
    }

   static async getRecommendations(currentTvShowId){
    try{
        const reponse = await axios.get(`${API_BASE_URL}/tv/${currentTvShowId}/recommendations?language=en-US&page=1`,{
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWQyOWY0Zjk0YTQxMjc2MWJlYzFiOTZkMGVkZDVjNyIsIm5iZiI6MTcyMzQxMTg2MC4xMDA4OTQsInN1YiI6IjY2YjdlYWM4ZWY5NmFlNDQzYmYyOWYzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kVD_QxV9i0fmxP7qyAPpXhBZ6jR07IJOwU65g9lIrUE'
              }
        })
        return reponse.data.results;
      }catch(error){
        alert("Une erreur est survenue");
      }
    }

    static async searchTvShow(tvShowName){
      try{
      const reponse = await axios.get(`${API_BASE_URL}/search/tv?query=${tvShowName}`,{
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWQyOWY0Zjk0YTQxMjc2MWJlYzFiOTZkMGVkZDVjNyIsIm5iZiI6MTcyMzQxMTg2MC4xMDA4OTQsInN1YiI6IjY2YjdlYWM4ZWY5NmFlNDQzYmYyOWYzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kVD_QxV9i0fmxP7qyAPpXhBZ6jR07IJOwU65g9lIrUE'
          }
    });
      console.log(reponse.data.results);
      return reponse.data.results;
    }catch(error){
      alert("Une erreur est survenue");
    }
    }
    

 }