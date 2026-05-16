const convertButton =
document.querySelector(".convert-button")
const fromCurrencySelect =
document.querySelector(".from-currency")
const toCurrencySelect =
document.querySelector(".to-currency")
const swapButton =
document.querySelector(".swap-button")
const historyList =
document.querySelector(".history-list")
const updateTime =
document.querySelector(".update-time")
async function convertValues() {
convertButton.innerHTML =
"Convertendo..."
convertButton.classList.add("loading")
const inputValue = parseFloat(
document
.querySelector(".input-currency")
.value
.replace(",", ".")
) || 0
const fromCurrency =
fromCurrencySelect.value
const toCurrency =
toCurrencySelect.value
const currencyValueToConvert =
document.querySelector(".currency-value-to-convert")
const currencyValueConverted =
document.querySelector(".currency-value")
const dados = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,JPY-BRL"
).then(response => response.json())
const moedas = {
BRL: 1,
USD: Number(dados.USDBRL.high),
EUR: Number(dados.EURBRL.high),
GBP: Number(dados.GBPBRL.high),
JPY: Number(dados.JPYBRL.high),
BTC: Number(dados.BTCBRL.high)
}
const valorEmReal =
inputValue * moedas[fromCurrency]
const valorFinal =
valorEmReal / moedas[toCurrency]
currencyValueToConvert.innerHTML =
formatCurrency(inputValue, fromCurrency)
currencyValueConverted.innerHTML =
formatCurrency(valorFinal, toCurrency)
changeCurrencyInfo()
const historyItem = document.createElement("li")
historyItem.innerHTML = `
${formatCurrency(inputValue, fromCurrency)}
 →
${formatCurrency(valorFinal, toCurrency)}
 `
historyList.prepend(historyItem)
const now = new Date()
updateTime.innerHTML =
`Cotação atualizada às ${now.toLocaleTimeString()}`
convertButton.innerHTML =
"Converter"
convertButton.classList.remove("loading")
}
function formatCurrency(value, currency) {
if (currency === "BTC") {
return value.toFixed(6) + " BTC"
}
return new Intl.NumberFormat("pt-BR", {
style: "currency",
currency: currency
}).format(value)
}
function changeCurrencyInfo() {
const fromCurrencyName =
document.getElementById("from-currency-name")
const toCurrencyName =
document.getElementById("to-currency-name")
const fromCurrencyImg =
document.querySelector(".from-currency-img")
const toCurrencyImg =
document.querySelector(".to-currency-img")
const moedasInfo = {
BRL: {
nome: "Real Brasileiro",
imagem: "./real.png"
},
USD: {
nome: "Dólar Americano",
imagem: "./usa.png"
},
EUR: {
nome: "Euro",
imagem: "./euro.png"
},
GBP: {
nome: "Libra Esterlina",
imagem: "./libra.png"
},
JPY: {
nome: "Iene Japonês",
imagem: "./iene.png"
},
BTC: {
nome: "Bitcoin",
imagem: "./bitcoin.png"
}
}
fromCurrencyName.innerHTML =
moedasInfo[fromCurrencySelect.value].nome
fromCurrencyImg.src =
moedasInfo[fromCurrencySelect.value].imagem
toCurrencyName.innerHTML =
moedasInfo[toCurrencySelect.value].nome
toCurrencyImg.src =
moedasInfo[toCurrencySelect.value].imagem
}
function swapCurrencies(){
const tempValue =
fromCurrencySelect.value
fromCurrencySelect.value =
toCurrencySelect.value
toCurrencySelect.value =
tempValue
changeCurrencyInfo()
convertValues()
}
convertButton.addEventListener(
"click",
convertValues
)
fromCurrencySelect.addEventListener(
"change",
changeCurrencyInfo
)
toCurrencySelect.addEventListener(
"change",
changeCurrencyInfo
)
swapButton.addEventListener(
"click",
swapCurrencies
)
changeCurrencyInfo()
