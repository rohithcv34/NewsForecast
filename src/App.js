import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";    
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import LanguageSwitcher from "./components/LanguageSwitcher";


const App = () => {
  const [news, setNews] = useState([]); // Initialize as an empty array
  const [weather, setWeather] = useState(null);//store and setweather,initial value will be null
  const [searchQuery, setSearchQuery] = useState("");//store and update the search input,initial value will be empty string
  const [language, setLanguage] = useState("en");//set and update the value of language state , initial value is set to english
  const [location, setLocation] = useState("India");//set and update the weather where data will be fetched,initial value will be india
  const [isDarkMode, setIsDarkMode] = useState(false);// used to switch from light mode to dark mode

  const GNEWS_API = "bd7cdecc4eeea729ccf1bbc593f169c0";//api key to fetch news
  const OPENWEATHER_API = "80de99660d2381b0ccc158cd03085421";//api key to fetch weather and location

  useEffect(() => { 
    const getLocation = async () => {
      if (navigator.geolocation) { //if location granted the code will be executed
   navigator.geolocation.getCurrentPosition(async (position) => { //this method takes the user's current geographic position lat and long.
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const weatherResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API}`
          );
   setWeather(weatherResponse.data);//used to update the state variabke weather with data fetched from the above api
          const newsResponse = await axios.get(
            `https://gnews.io/api/v4/top-headlines?lang=${language}&country=in&token=${GNEWS_API}`
          );
       if (newsResponse.data && newsResponse.data.articles) {
            setNews(newsResponse.data.articles); //  set the articles fetched from api securely
          } else {
            setNews([]); //set to empty if no articles are fetched
          }
        });
      }
    };
    getLocation(); 
  }, [language]);


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsResponse = await axios.get(
          `https://gnews.io/api/v4/search?q=${searchQuery}&lang=${language}&token=${GNEWS_API}`
        );

        if (newsResponse.data && newsResponse.data.articles) {
          setNews(newsResponse.data.articles);
        } else {
          setNews([]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews([]); // sets to an empty array on error
      }
    };
    if (searchQuery) {
      fetchNews();
    } else {
      const newsResponse = axios.get(
        `https://gnews.io/api/v4/top-headlines?lang=${language}&country=in&token=${GNEWS_API}`
      );

      newsResponse.then((response) => {
        if (response.data && response.data.articles) {
          setNews(response.data.articles);
        } else {
          setNews([]);
        }
      });
    }
  }, [searchQuery, language]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };  //function will be called when toggle button is clicked to switch between dark and light mode

  return (
    <div
      className={`min-h-screen p-6 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">📰NEWSFORECAST🌦️</h1>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher setLanguage={setLanguage} />
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>

        <SearchBar setSearchQuery={setSearchQuery} />

        {weather && <WeatherCard weather={weather} />}
        <NewsList articles={news} />
      </div>
    </div>
  );
};
//passed the news to newslist component
export default App;