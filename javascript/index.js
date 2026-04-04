function updateTime() {
  // usa
  let usaElement = document.querySelector("#usa")
  let usaDateElement = usaElement.querySelector(".date")
  let usaTimeElement = usaElement.querySelector(".time")
  let usaTime = moment().tz("America/New_York")

  usaDateElement.innerHTML = usaTime.format("dd MMMM Do YYYY")
  usaTimeElement.innerHTML = usaTime.format("h:mm:ss [<small>]A[</small>]")

  // europe
  let europeElement = document.querySelector("#europe")
  let europeDateElement = europeElement.querySelector(".date")
  let europeTimeElement = europeElement.querySelector(".time")
  let europeTime = moment().tz("Europe/Amsterdam")

  europeDateElement.innerHTML = europeTime.format("dd MMMM Do YYYY")
  europeTimeElement.innerHTML = europeTime.format(
    "h:mm:ss [<small>]A[</small>]",
  )

  // asia
  let asiaElement = document.querySelector("#asia")
  let asiaDateElement = asiaElement.querySelector(".date")
  let asiaTimeElement = asiaElement.querySelector(".time")
  let asiaTime = moment().tz("Asia/Seoul")

  asiaDateElement.innerHTML = asiaTime.format("dd MMMM Do YYYY")
  asiaTimeElement.innerHTML = asiaTime.format("h:mm:ss [<small>]A[</small>]")
}
updateTime()
setInterval(updateTime, 1000)
