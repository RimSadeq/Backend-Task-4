
let form = document.getElementById('form1')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    weatherFun()
    form.reset()
})
const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const forecastF = document.getElementById('forecast')
const latitude = document.getElementById('latitude')
const longitude = document.getElementById('longitude')

let weatherFun = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/weather?address='+address)
        const data = await res.json()
        console.log(data)
        if(data.error){
            errorF.innerText = data.error
            locationF.innerText = ''
            forecastF.innerText = ''
            latitude .innerText=''
            longitude.innerText =''
        }
        else {
            
            setTimeout(() => {
                locationF.innerText = data.location;
                            }, 1000);
            setTimeout(() => {
                forecastF.innerText = data.forecast;
                            }, 3000);
           
            setTimeout(() => {
                latitude .innerText =data.latitude;  
                            }, 5000);
            setTimeout(() => {
                longitude.innerText =data.longitude;  
                                            }, 7000);
            errorF.innerText = ''
            
        }
    }
    catch(e){
        console.log(e)
    }
}