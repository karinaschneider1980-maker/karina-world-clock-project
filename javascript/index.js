let previousTimeUsa = ""
let previousTimeEurope = ""
let previousTimeAsia = ""
let cityInterval = null

function updateTime() {
  let usaElement = document.querySelector("#usa")
  if (usaElement) {
    let usaDateElement = usaElement.querySelector(".date")
    let usaTimeElement = usaElement.querySelector(".time")
    let usaTime = moment().tz("America/New_York")
    let currentTimeUsa = usaTime.format("h:mm:ss")
    usaDateElement.innerHTML = usaTime.format("dd MMMM Do YYYY")
    usaTimeElement.innerHTML = `
      ${currentTimeUsa
        .split("")
        .map((char, i) =>
          char === ":"
            ? ":"
            : `<span class="flip ${char !== previousTimeUsa[i] ? "changed" : ""}">${char}</span>`,
        )
        .join("")}
      <small>${usaTime.format("A")}</small>
    `
    previousTimeUsa = currentTimeUsa
  }

  let europeElement = document.querySelector("#europe")
  if (europeElement) {
    let europeDateElement = europeElement.querySelector(".date")
    let europeTimeElement = europeElement.querySelector(".time")
    let europeTime = moment().tz("Europe/Amsterdam")
    let currentTimeEurope = europeTime.format("h:mm:ss")
    europeDateElement.innerHTML = europeTime.format("dd MMMM Do YYYY")
    europeTimeElement.innerHTML = `
      ${currentTimeEurope
        .split("")
        .map((char, i) =>
          char === ":"
            ? ":"
            : `<span class="flip ${char !== previousTimeEurope[i] ? "changed" : ""}">${char}</span>`,
        )
        .join("")}
      <small>${europeTime.format("A")}</small>
    `
    previousTimeEurope = currentTimeEurope
  }

  let asiaElement = document.querySelector("#asia")
  if (asiaElement) {
    let asiaDateElement = asiaElement.querySelector(".date")
    let asiaTimeElement = asiaElement.querySelector(".time")
    let asiaTime = moment().tz("Asia/Seoul")
    let currentTimeAsia = asiaTime.format("h:mm:ss")
    asiaDateElement.innerHTML = asiaTime.format("dd MMMM Do YYYY")
    asiaTimeElement.innerHTML = `
      ${currentTimeAsia
        .split("")
        .map((char, i) =>
          char === ":"
            ? ":"
            : `<span class="flip ${char !== previousTimeAsia[i] ? "changed" : ""}">${char}</span>`,
        )
        .join("")}
      <small>${asiaTime.format("A")}</small>
    `
    previousTimeAsia = currentTimeAsia
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess()
  }

  if (cityInterval) {
    clearInterval(cityInterval)
  }

  let previousTime = ""

  function showCityTime() {
    let cityName = cityTimeZone.replace("_", " ").split("/")[1]
    let cityTime = moment().tz(cityTimeZone)
    let currentTime = cityTime.format("h:mm:ss")
    let citiesElement = document.querySelector("#cities")
    citiesElement.innerHTML = `
      <div class="city">
        <div>
          <h4>${cityName}</h4>
          <div class="date">${cityTime.format("dd MMM Do YYYY")}</div>
        </div>
        <div class="time">
         ${currentTime
           .split("")
           .map((char, i) =>
             char === ":"
               ? ":"
               : `<span class="flip ${char !== previousTime[i] ? "changed" : ""}">${char}</span>`,
           )
           .join("")}
          <small>${cityTime.format("A")}</small>
        </div>
      </div>
      <a href="/">To cities</a>
    `
    previousTime = currentTime
  }

  showCityTime()
  cityInterval = setInterval(showCityTime, 1000)
}

updateTime()
setInterval(updateTime, 1000)

let citiesSelectElement = document.querySelector("#city")
citiesSelectElement.addEventListener("change", updateCity)
