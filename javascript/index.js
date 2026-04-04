let cityInterval = null

function updateTime() {
  let usaElement = document.querySelector("#usa")
  if (usaElement) {
    let usaDateElement = usaElement.querySelector(".date")
    let usaTimeElement = usaElement.querySelector(".time")
    let usaTime = moment().tz("America/New_York")
    usaDateElement.innerHTML = usaTime.format("dd MMMM Do YYYY")
    usaTimeElement.innerHTML = usaTime.format("h:mm:ss [<small>]A[</small>]")
  }

  let europeElement = document.querySelector("#europe")
  if (europeElement) {
    let europeDateElement = europeElement.querySelector(".date")
    let europeTimeElement = europeElement.querySelector(".time")
    let europeTime = moment().tz("Europe/Amsterdam")
    europeDateElement.innerHTML = europeTime.format("dd MMMM Do YYYY")
    europeTimeElement.innerHTML = europeTime.format(
      "h:mm:ss [<small>]A[</small>]",
    )
  }

  let asiaElement = document.querySelector("#asia")
  if (asiaElement) {
    let asiaDateElement = asiaElement.querySelector(".date")
    let asiaTimeElement = asiaElement.querySelector(".time")
    let asiaTime = moment().tz("Asia/Seoul")
    asiaDateElement.innerHTML = asiaTime.format("dd MMMM Do YYYY")
    asiaTimeElement.innerHTML = asiaTime.format("h:mm:ss [<small>]A[</small>]")
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value

  if (cityInterval) {
    clearInterval(cityInterval)
  }

  function showCityTime() {
    let cityName = cityTimeZone.replace("_", " ").split("/")[1]
    let cityTime = moment().tz(cityTimeZone)
    let citiesElement = document.querySelector("#cities")
    citiesElement.innerHTML = `
      <div class="city">
        <div>
          <h4>${cityName}</h4>
          <div class="date">${cityTime.format("dd MMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
      </div>
    `
  }

  showCityTime()
  cityInterval = setInterval(showCityTime, 1000)
}

updateTime()
setInterval(updateTime, 1000)

let citiesSelectElement = document.querySelector("#city")
citiesSelectElement.addEventListener("change", updateCity)
