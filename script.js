var url = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=15989dacd048f31feba68145cd215103'
var locate = 'http://api.openweathermap.org/geo/1.0/direct?q=Dallas&appid=15989dacd048f31feba68145cd215103'
var search = document.getElementById("seaBtn");
    search.addEventListener("click", city());
function city(){
        var searchedCity = document.getElementById('cName').value;
        document.getElementById('cityName').innerHTML = searchedCity;
        document.getElementById('recent1').innerHTML = searchedCity;
};






console.log(url);
fetch(url).then(function(data){
    return data.json()
}) .then(function(response){
    console.log(response);
})
//To retrieve data from a server use FETCH,(a promise), THEN we are going to ask for Data, and ACCESS the data via "response".
fetch(locate).then(function(data){
    return data.json()
}) .then(function(response){
    console.log(response);
})
console.log(locate);
//Click event with a function inside a function is the city value, we need to call fetch(locate) and pass in the city value to the URL(locate)
// After I must fetch the URL(url) and pass [city.coord] the lat/lon from locate to url.
