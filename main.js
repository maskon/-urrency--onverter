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
    
    const rates = {
        AED: data.Valute.AED.Value,
        AMD: data.Valute.AMD.Value,
        AUD: data.Valute.AUD.Value,
        AZN: data.Valute.AZN.Value,
        BGN: data.Valute.BGN.Value,
        BRL: data.Valute.BRL.Value,
        BYN: data.Valute.BYN.Value,
        CAD: data.Valute.CAD.Value,
        CHF: data.Valute.CHF.Value,
        CNY: data.Valute.CNY.Value,
        CZK: data.Valute.CZK.Value,
        DKK: data.Valute.DKK.Value,
        EGP: data.Valute.EGP.Value,
        EUR: data.Valute.EUR.Value,
        GBP: data.Valute.GBP.Value,
        GEL: data.Valute.GEL.Value,
        HKD: data.Valute.HKD.Value,
        HUF: data.Valute.HUF.Value,
        IDR: data.Valute.IDR.Value,
        INR: data.Valute.INR.Value,
        JPY: data.Valute.JPY.Value,
        KGS: data.Valute.KGS.Value,
        KRW: data.Valute.KRW.Value,
        KZT: data.Valute.KZT.Value,
        MDL: data.Valute.MDL.Value,
        NOK: data.Valute.NOK.Value,
        NZD: data.Valute.NZD.Value,
        PLN: data.Valute.PLN.Value,
        QAR: data.Valute.QAR.Value,
        RON: data.Valute.RON.Value,
        RSD: data.Valute.RSD.Value,
        SEK: data.Valute.SEK.Value,
        SGD: data.Valute.SGD.Value,
        THB: data.Valute.THB.Value,
        TJS: data.Valute.TJS.Value,
        TMT: data.Valute.TMT.Value,
        TRY: data.Valute.TRY.Value,
        UAH: data.Valute.UAH.Value,
        USD: data.Valute.USD.Value,
        UZS: data.Valute.UZS.Value,
        VND: data.Valute.VND.Value,
        XDR: data.Valute.XDR.Value,
        ZAR: data.Valute.ZAR.Value
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
            textRub.textContent = `1 RUB = ${rubAED.toFixed(2)} ${rates[selectOption]}`;
        }
    }; 
};
getCurrencies()

