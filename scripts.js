const button = document.getElementById('mybutton')
const select = document.getElementById('currency-select')

const dolar = 5.14
const euro = 5.08
const bitcoin = 0.0000097

const convertValues = () => {
  const inputReais = document.getElementById('inputReal').value
  const valueReais = document.getElementById('valueReal')
  const valueDolar = document.getElementById('valueDolar')

  valueReais.innerHTML = inputReais



  valueReais.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais)

  if (select.value === "US$ Dolar Americano") {
    valueDolar.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar)
  }
  if (select.value === "€ Euro") {
    valueDolar.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro)
  }
  if (select.value === "Bitcoin") {
    valueDolar.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "XBT",
    }).format(inputReais * bitcoin)
  }

}

chanceCurrency = () => {
  const currencyName = document.getElementById('currency-name')
  const currencyImg = document.getElementById('currency-image')

  if (select.value === 'US$ Dolar Americano') {
    currencyName.innerHTML = 'Dólar Americano'
    currencyImg.src = "./assets/estados-unidos (1) 1.png"
  }

  if (select.value === '€ Euro') {
    currencyName.innerHTML = 'Euro'
    currencyImg.src = "./assets/Euro.png"
  }
  if (select.value === 'Bitcoin') {
    currencyName.innerHTML = 'Bitcoin'
    currencyImg.src = "./assets//Bitcoin.png"
  }


  convertValues()

}

select.addEventListener('change', chanceCurrency)
button.addEventListener('click', convertValues)