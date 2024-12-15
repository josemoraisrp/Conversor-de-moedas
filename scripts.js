


const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)
    const dolarToday = 6.05
    const euroToday = 6.35
    const ieneToday = 0.039
    const libraToday = 8.41
    const bitcoinToday = 624839

    const valueConverted = inputCurrencyValue / dolarToday

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ieneToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: 'BTC',
            minimumFractionDigits: 8
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./usa.png"
        currencyImage.style.height = "56px"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./euro.png"
        currencyImage.style.height = "56px"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./libra.png"
        currencyImage.style.height = "56px"
    }

    if (currencySelect.value == "iene") {
        currencyName.innerHTML = "Iene"
        currencyImage.src = "./iene.png"
        currencyImage.style.height = "56px"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "BitCoin"
        currencyImage.src = "./bitcoin.png"
        currencyImage.style.height = "56px"
    }

    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues) 
