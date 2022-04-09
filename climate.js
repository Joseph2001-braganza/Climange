const form = document.querySelector('#searchForm');
//typewriter effect

//here it ends
//api call
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    console.log(e)
    let search = form.elements.query.value;
    console.log(search)
    const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=4e7cd7edc9a044f297095401212509&q=${search}&aqi=no`)
    //console.log("im in here")
    renderUsers(res.data);
})
const renderUsers = (users) => {
    console.log(users)
    document.getElementById("p1").innerHTML = `${users.location.country}`;
    document.getElementById("p2").innerHTML = `<img src="${users.current.condition.icon}" alt="">`;
    document.getElementById("title").innerHTML = `<h5> Temp in ${users.location.name}</h5>`
    document.getElementById("p3").innerHTML = `<h5>${users.current.temp_c} C</h5>`
    document.getElementById("p4").innerHTML = `<h5>${users.current.temp_f} F</h5>`
}