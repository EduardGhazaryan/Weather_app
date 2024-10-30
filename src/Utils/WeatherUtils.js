export const kelvinToCelsius = (tempK) => (tempK - 273.15).toFixed(0)

export const kelvinToFahrenheit = (tempK) => {
    return ((tempK - 273.15) * 9/5 + 32).toFixed(0)
};