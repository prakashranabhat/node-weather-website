const request = require('request')

const forecast = (address, callback) => {
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + address +'?unitGroup=us&key=G34RKF9UT4ANSJ5LQSA6B57RH'

    request({url, json:true}, (error, { body}) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined) 
        }else{
            callback(undefined, 'Live condition is '+body.days[0].conditions +'. The current temperature is ' + body.days[0].temp + '. The maximum temperature today is ' + body.days[0].tempmax + '. The minimum temperature today is ' + body.days[0].tempmin)

        }

    })
}

module.exports = forecast