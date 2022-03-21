const PLANETS: { [key: string]: number } = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const EARTH_DAYS_IN_ONE_ORBITAL_PERIOD = 365.25;

function transformSecondsInDays(seconds: number): number {
  return seconds / 60 / 60 / 24;
}

function transformSecondsInEarthYears(seconds: number): number {
  return transformSecondsInDays(seconds) / EARTH_DAYS_IN_ONE_ORBITAL_PERIOD;
}

export function age(planet: string, seconds: number): number {
  const result = transformSecondsInEarthYears(seconds) / PLANETS[planet];
  return Number(result.toFixed(2));
}
