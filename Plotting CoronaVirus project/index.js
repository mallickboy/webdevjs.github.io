function updateMap() {
    console.log('updating data');
    fetch('/data.json')
    .then(response=>response.json())
    .then(rsp=>{
        // console.log(rsp.data); // print values
        rsp.data.forEach(element => {
            latitude=element.latitude;
            longitude=element.longitude;
            
            
            
            
            let favour,warning=element.infected/(element.recovered*2) +5*element.dead +0.5* element.sick;
            if (element.recovered==0) {
                warning=element.infected +5*element.dead+0.7* element.sick;
            }
            
            
            // color
            let redi=0;
            let greeni=warning;
            let bluei=warning;

            if (warning>200) {
                redi=-warning/25 ;  
            }
            // Mark on the map
            new mapboxgl.Marker({
                draggable: false, // true /false
                color:`rgb(${200-redi},${205-greeni},${255-bluei})`
            })
                .setLngLat([longitude,latitude])
                .addTo(map);

        });
    })
}
updateMap();
setInterval(() => {
    
    updateMap();
}, 200000);