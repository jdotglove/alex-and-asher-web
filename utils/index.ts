/**
 * 
 * @param pointAString format: 34.321,101.345
 * @param pointBString fromat: 34.321,101.345
 * @returns distance between pointA and pointB
 */
export const calculateAirDistance = (pointAString: string, pointBString: string) => {
  const toRadians = (x: number) => {
    return x * Math.PI / 180;
  }
  if (!pointAString || !pointBString) {
    return;
  }

  const earthRadius = 6371; // km

  // Breakdown input strings into individual latitude and longitude
  const lat1 = Number(pointAString.split(',')[0]);
  const lon1 = Number(pointAString.split(',')[1]);
  
  const lat2 = Number(pointBString.split(',')[0]);
  const lon2 = Number(pointBString.split(',')[1]);

  // Convert from degrees to radians
  const pointALatitude = toRadians(lat1);
  const pointBLatitude = toRadians(lat2);
  const changeInLatitude = toRadians(lat2 - lat1);
  const changeInLongitude = toRadians(lon2 - lon1);

  // Haversine formula
  const a = (Math.sin(changeInLatitude / 2) * Math.sin(changeInLatitude / 2)) + Math.cos(pointALatitude) * Math.cos(pointBLatitude) * (Math.sin(changeInLongitude / 2) * Math.sin(changeInLongitude / 2));
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (earthRadius * c).toFixed(2); //trim decimals
}

export const parseCoordinatesFromString = (decimalString: string) => {
  const coordArray = decimalString.split(',')
  return {
    lat: Number(coordArray[0]),
    lng: Number(coordArray[1]),
  }
}