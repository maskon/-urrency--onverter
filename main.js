const form = document.querySelector('#form');   
const selectElement = document.querySelector('#selectElement');
const input = document.querySelector('#input');
const result = document.querySelector('#result');  
const textValute = document.querySelector('#text-valute');
const textRub = document.querySelector('#text-rub');

async function getCurrencies() {
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    
    const rates = {
        AED: data.Valute.AED.Value,
        AMD: data.Valute.AMD.Value/100,
        AUD: data.Valute.AUD.Value,
        AZN: data.Valute.AZN.Value,
        BGN: data.Valute.BGN.Value,
        BRL: data.Valute.BRL.Value,
        BYN: data.Valute.BYN.Value,
        CAD: data.Valute.CAD.Value,
        CHF: data.Valute.CHF.Value,
        CNY: data.Valute.CNY.Value,
        CZK: data.Valute.CZK.Value/10,
        DKK: data.Valute.DKK.Value,
        EGP: data.Valute.EGP.Value/10,
        EUR: data.Valute.EUR.Value,
        GBP: data.Valute.GBP.Value,
        GEL: data.Valute.GEL.Value,
        HKD: data.Valute.HKD.Value,
        HUF: data.Valute.HUF.Value/100,
        IDR: data.Valute.IDR.Value/10000,
        INR: data.Valute.INR.Value/10,
        JPY: data.Valute.JPY.Value/100,
        KGS: data.Valute.KGS.Value/10,
        KRW: data.Valute.KRW.Value/1000,
        KZT: data.Valute.KZT.Value/100,
        MDL: data.Valute.MDL.Value/10,
        NOK: data.Valute.NOK.Value/10,
        NZD: data.Valute.NZD.Value,
        PLN: data.Valute.PLN.Value,
        QAR: data.Valute.QAR.Value,
        RON: data.Valute.RON.Value,
        RSD: data.Valute.RSD.Value/100,
        SEK: data.Valute.SEK.Value/10,
        SGD: data.Valute.SGD.Value,
        THB: data.Valute.THB.Value/10,
        TJS: data.Valute.TJS.Value/10,
        TMT: data.Valute.TMT.Value,
        TRY: data.Valute.TRY.Value/10,
        UAH: data.Valute.UAH.Value/10,
        USD: data.Valute.USD.Value,
        UZS: data.Valute.UZS.Value/10000,
        VND: data.Valute.VND.Value/10000,
        XDR: data.Valute.XDR.Value,
        ZAR: data.Valute.ZAR.Value/10
    };

    form.addEventListener('change', converter);
    input.addEventListener('input', converter);
       
    function converter() {
        const selectOption = selectElement.value;
        if (rates.hasOwnProperty(selectOption)) {
            const inputRoundUp = +input.value * rates[selectOption];
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 ${selectOption} = ${rates[selectOption].toFixed(2)} RUB`;
            const rubAED = 1 / rates[selectOption];
            textRub.textContent = `1 RUB = ${rubAED.toFixed(2)} ${selectOption}`;
        }
    }; 
};
getCurrencies()

