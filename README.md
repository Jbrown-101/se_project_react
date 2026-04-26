# WTWR (What to Wear?)

WTWR is a React app that takes the guesswork out of getting dressed. It detects your location, fetches real-time weather data, and recommends clothing items suited to the current temperature. So you always know what to wear before heading out the door.

## About the project

The idea of the application is pretty simple - we make a call to an API, which then responds with the daily weather forecast. We collect the weather data, process it, and then based on the forecast, we recommend suitable clothing to the user.

## Functionality

Live weather detection - requests the user's geolocation on load and fetches current temperature and conditions from the OpenWeatherMap API
Clothing recommendations - filters and displays clothing cards based on the current temperature range (hot, warm, cold)
Item detail modal - clicking any clothing card opens a full-size preview with item details
Add new items - users can submit new clothing items via a form modal, selecting a name, image URL, and weather type
Responsive layout - the interface adapts cleanly across screen sizes

## Technologies & Techniques

(React 18: UI framework, component architecture)
(Vite 5: Development server and production bundler)
(JavaScript: Application logic)
(CSS: Component and global styling)
(ESLint 9: Code quality and linting)

## Screenshots

- [New Garment Modal](https://postimg.cc/dDkpkkXS)
- [Preview Garment Modal](https://postimg.cc/ctwFDYGZ)
- [WTWR](https://postimg.cc/v4Q0zcqw)

## Links

- [Figma Design](https://www.figma.com/file/DTojSwldenF9UPKQZd6RRb/Sprint-10%3A-WTWR)

- [Project Pitch](https://www.loom.com/share/5f3501176cb64279818dac6c44c32e80)
