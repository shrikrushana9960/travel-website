import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import SearchBar from '../SearchBar';

export default function Services() {
  const [movies,setMovies] =useState([]);
  const param=useParams('movie');
  const [loading,isLoding]=useState(false);
  
useEffect(()=>{
  if(!param.movie)
  param.movie="tranding"
  console.log(param)
  
  isLoding(true);
  fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${param.movie}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "01f25a0c36msh615f8fd34db601cp1a44dejsn02c97e29850c",
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data)=>
    {
     let image="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"
      const gained_movies=data.d.map(item=>{
         if(item.hasOwnProperty('i')){
                 image=item.i.imageUrl;  

        } 
        
        const movieObj = {
          src: image,
          text: item.l,
          id: item.id,
          label: item.q,
          path: `https://www.google.com/search?q=${item.l}&sxsrf=ALeKk019yZVCDr38IUaaFGSIRKStc8njew:1623326664627&source=lnms&tbm=isch&sa=X&ved=2ahUKEwja5MuJg43xAhXH7XMBHXlzDB8Q_AUoAnoECAEQBA&biw=1536&bih=722`,
        };
        
          return movieObj;
      
      }
      )
      setMovies(gained_movies);
      isLoding(false);
    })
    .catch((err) => {
      console.error(err);
    });
},[param])
  return <>{loading ?  <SearchBar /> :  <Cards data={movies} />}
  </>;
}
