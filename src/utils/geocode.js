const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoicmFuYWJoYXRwcmFrYXNoNzIiLCJhIjoiY2trMmo2dzM3MTFxbzJ1bnl6ZHFsMGxhNCJ9.PMi6RxD3pNfVsGbr_r_ZjA'

    request( { url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to location services', undefined )
        }else if (response.body.features.length === 0){
            callback('Unable to find location. Try another search', undefined)
        }else{
            callback(undefined, {
                // latitudde : response.body.features[0].center[0],
                // longitude : response.body.features[0].center[1],
                location : response.body.features[0].place_name,
                address :response.body.features[0].properties.address
            })
        }

    })
}
module.exports = geocode