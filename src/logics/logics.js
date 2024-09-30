export default async function getCityWiseWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={apiKey}`;
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();
    return data;

  } 
  catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }

}

export function convertLongToTime(timestamp) {
  // Create a Date object from the timestamp
  const date = new Date(timestamp);

  // Get the hours, minutes, and seconds
  const hours = date.getHours();   // Get hours (0-23)
  const minutes = date.getMinutes(); // Get minutes (0-59)
  const seconds = date.getSeconds(); // Get seconds (0-59)

  // Format to a readable string (optional)
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
