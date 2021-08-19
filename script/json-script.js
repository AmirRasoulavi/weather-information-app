const api = '05c7f6bf633b6f157771a0d79285a5ea';
const requestCity= async (city)=>{
    const baseURL='http://api.openweathermap.org/data/2.5/weather'
    const query=`?q=${city}&appid=${api}`;
    const response=await fetch(baseURL+query);
    const data=await response.json();
    return data;
}
