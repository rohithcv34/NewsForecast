NEWSFORECAST

This App is made to provide weather and News updates to the user according to their current Location.


1.TECHNOLOGIES USED

REACTJS

React was chosen as the core framework because it allows for fast, component-based rendering, which is essential for building a dynamic and responsive UI that can easily handle real-time updates of news and weather data

TAILWIND CSS

Tailwind CSS was used because it enables quick styling with utility classes, allowing for a highly customizable and responsive layout with minimal custom CSS. This helps speed up development time and ensures that the app looks great across all devices


AXIOS

Axios is a lightweight, promise based http client that can be used in both browser and nodejs environments.it simplifies making http requests and handling responses offering a wide range of features that enhances its functionality


2.UI DESIGN

Using Tailwind's responsive utilities, the app ensures a seamless experience on mobile, tablet, and desktop devices. Grid and flex layouts are utilized to ensure proper alignment and spacing across different screen sizes.

The App’s layout includes the title of the App,option to switch the language between english and hindi, a button to switch between dark and light mode, search 
functionality and  a layout where it showcase the weather condition of the user

Going down below we have news cards where it displays the news title and a small description fetched from the API provided

3.DATA AND LOCATION FETCHING

For fetching the weather and news data, I integrated the OpenWeatherMap API for weather updates and the GNewsAPI for news articles. These APIs provide accurate, real-time data, which is important for creating a dynamic experience.
 I used the browser's Geolocation API to fetch the user's location. Based on the latitude and longitude returned, I then fetch the news and weather data for that specific location. If the location is not available, the app falls back to a default location


5.STATE MANAGEMENT

Used React’s useState and useEffect hooks to manage the app’s state.

 useState : used to store the fetched data

useEffect : used to trigger the API calls when the app is loaded or when the user changes their location

 
TESTING

Tested and confirmed that all the functionalities are working fine 



CONCLUSION

This app allows users to get personalized news and weather updates based on their location. React, Tailwind CSS, and custom CSS were used to ensure the app is fast, responsive, and easy to navigate. The use of location-based data ensures users receive relevant content, and the app is designed with an emphasis on performance and user experience



