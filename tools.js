
const apiKey = '07e55e1d389534192140cc530fe3f8a7'

export async function getCurrentWeather({location}){
    try {
            const weatherUrl = new URL(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}&units=metric`)
            const res = await fetch(weatherUrl)
            const data = await res.json()
            return JSON.stringify(data) 
    } catch (error) {
        alert(error.message)
    }
}

export async function getLocation() {
    try {
        const response = await fetch('https://ipapi.co/json/')
        const text = await response.json()
        return JSON.stringify(text)
    } catch (error){
        alert(error.message)
    }
}

export const functions = [
    {
        function: getCurrentWeather,
        parse: JSON.parse,
        parameters: {
            type: 'object',
            properties: {
                location: {
                    type: 'string',
                    description: 'The name of the city from where to get the weather'
                }
            },
            required: ['location']
        }
    }, 
    {
        function: getLocation,
        parameters: {
            type: 'object',
            properties: {}
        }
    },
]
