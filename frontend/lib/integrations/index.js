import { createMapsAdapter } from '@/lib/integrations/adapters/maps-adapter';
import { createSeoSchemaAdapter } from '@/lib/integrations/adapters/seo-schema-adapter';
import { createWeatherAdapter } from '@/lib/integrations/adapters/weather-adapter';

export function createIntegrations({ mapsClient = null, weatherClient = null, siteUrl }) {
  return {
    seo: createSeoSchemaAdapter({ siteUrl }),
    maps: createMapsAdapter(mapsClient),
    weather: createWeatherAdapter(weatherClient)
  };
}
