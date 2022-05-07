let latitude, longtitude="";

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onerror);

} else{
    alert("tarayıcı konum bilgisini alamıyor");
}
function onSuccess(position) {
    let latitude= position.coords.latitude;
    let longtitude=position.coords.longtitude;



    const api_key="0443d54c21424c88818b850cb62f456e"

    const url='https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longtitude}&key=${api_key}';

    fetch(url)
        .then(Response=>Response.json())
        .then(Result=>console.log(Result));
    
}

function onerror(error){
    if(error.code==1){
        alert("kullanıcı erişim izni reddetti.");
    }else if(error.code==2){
        alert("konum alınamadı");
    }else{
        alert("bir hata oluştu");
    }
}