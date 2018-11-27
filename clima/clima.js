const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=57b19d1ac77267332ba98309d997659d`)

    let temp = resp.data.main.temp
    return temp;

}


module.exports = {
    getClima
}