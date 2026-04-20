const FALLBACK_WEATHER = {
  summary: 'Vorhersage derzeit nicht verfuegbar',
  temperatureC: null,
  precipitationProbability: null,
  source: 'fallback'
};

export function createWeatherAdapter(client = null) {
  return {
    name: 'weather',
    async getForecastForPlace(place) {
      if (!client) {
        return {
          ...FALLBACK_WEATHER,
          placeId: place.id
        };
      }

      try {
        const forecast = await client.fetchForecast(place.coordinates);
        return {
          placeId: place.id,
          summary: forecast.summary,
          temperatureC: forecast.temperatureC,
          precipitationProbability: forecast.precipitationProbability,
          source: 'provider'
        };
      } catch (error) {
        return {
          ...FALLBACK_WEATHER,
          placeId: place.id,
          errorCode: 'weather_provider_failed'
        };
      }
    }
  };
}
