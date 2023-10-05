async function getCurrencies() {
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
    const response = await fetch(url);
    const data = await response.json();
    
    // Валюты
    const aedRate = data.Valute.AED.Value;
    const amdRate = data.Valute.AMD.Value;
    const audRate = data.Valute.AUD.Value;
    const aznRate = data.Valute.AZN.Value;
    const bgnRate = data.Valute.BGN.Value;
    const brlRate = data.Valute.BRL.Value;
    const bynRate = data.Valute.BYN.Value;
    const cadRate = data.Valute.CAD.Value;
    const chfRate = data.Valute.CHF.Value;
    const cnyRate = data.Valute.CNY.Value;
    const czkRate = data.Valute.CZK.Value;
    const dkkRate = data.Valute.DKK.Value;
    const egpRate = data.Valute.EGP.Value;
    const eurRate = data.Valute.EUR.Value;
    const gbpRate = data.Valute.GBP.Value;
    const gelRate = data.Valute.GEL.Value;
    const hkdRate = data.Valute.HKD.Value;
    const hufRate = data.Valute.HUF.Value;
    const idrRate = data.Valute.IDR.Value;
    const inrRate = data.Valute.INR.Value;
    const jpyRate = data.Valute.JPY.Value;
    const kgsRate = data.Valute.KGS.Value;
    const krwRate = data.Valute.KRW.Value;
    const kztRate = data.Valute.KZT.Value;
    const mdlRate = data.Valute.MDL.Value;
    const nokRate = data.Valute.NOK.Value;
    const nzdRate = data.Valute.NZD.Value;
    const plnRate = data.Valute.PLN.Value;
    const qarRate = data.Valute.QAR.Value;
    const ronRate = data.Valute.RON.Value;
    const rsdRate = data.Valute.RSD.Value;
    const sekRate = data.Valute.SEK.Value;
    const sgdRate = data.Valute.SGD.Value;
    const thbRate = data.Valute.THB.Value;
    const tjsRate = data.Valute.TJS.Value;
    const tmtRate = data.Valute.TMT.Value;
    const tryRate = data.Valute.TRY.Value;
    const uahRate = data.Valute.UAH.Value;
    const usdRate = data.Valute.USD.Value;
    const uzsRate = data.Valute.UZS.Value;
    const vndRate = data.Valute.VND.Value;
    const xdrRate = data.Valute.XDR.Value;
    const zarRate = data.Valute.ZAR.Value;
    
    const form = document.querySelector('#form');
    
    const selectElement = document.querySelector('#selectElement');
    const input = document.querySelector('#input');
    const result = document.querySelector('#result');
    
    const textValute = document.querySelector('#text-valute');
    const textRub = document.querySelector('#text-rub');
    
    
    form.addEventListener('change', function() {
        const selectOption = selectElement.value;
        
        if (selectOption === "AED") {
            result.value = +input.value * aedRate;
            textValute.textContent = `1 AED = ${aedRate.toFixed(2)} RUB`;
            const rubAED = 1 / aedRate;
            textRub.textContent = `1 RUB = ${rubAED.toFixed(2)} AED`;
        }
        
        else if (selectOption === "AMD") {
            result.value = +input.value * amdRate;
            textValute.textContent = `1 AMD = ${amdRate.toFixed(2)} RUB`;
            const rubAMD = 1 / amdRate;
            textRub.textContent = `1 RUB = ${rubAMD.toFixed(2)} AMD`;
        }
        
        else if (selectOption === "AUD") {
            result.value = +input.value * audRate;
            textValute.textContent = `1 AUD = ${audRate.toFixed(2)} RUB`;
            const rubAUD = 1 / audRate;
            textRub.textContent = `1 RUB = ${rubAUD.toFixed(2)} AUD`;
        }
        
        else if (selectOption === "AZN") {
            result.value = +input.value * aznRate;
            textValute.textContent = `1 AZN = ${aznRate.toFixed(2)} RUB`;
            const rubAZN = 1 / aznRate;
            textRub.textContent = `1 RUB = ${rubAZN.toFixed(2)} AZN`;
        }
        
        else if (selectOption === "BGN") {
            result.value = +input.value * bgnRate;
            textValute.textContent = `1 BGN = ${bgnRate.toFixed(2)} RUB`;
            const rubBGN = 1 / bgnRate;
            textRub.textContent = `1 RUB = ${rubBGN.toFixed(2)} BGN`;
        }
        
        else if (selectOption === "BRL") {
            result.value = +input.valuBRL * brlRate;
            textValute.textContent = `1 BRL = ${brlRate.toFixed(2)} RUB`;
            const rubBRL = 1 / brlRate;
            textRub.textContent = `1 RUB = ${rubBRL.toFixed(2)} BRL`;
        }
        
        else if (selectOption === "BYN") {
            result.value = +input.value * bynRate;
            textValute.textContent = `1 BYN = ${bynRate.toFixed(2)} RUB`;
            const rubBYN = 1 / bynRate;
            textRub.textContent = `1 RUB = ${rubBYN.toFixed(2)} BYN`;
        }
        
        else if (selectOption === "CAD") {
            result.value = +input.value * cadRate;
            textValute.textContent = `1 CAD = ${cadRate.toFixed(2)} RUB`;
            const rubCAD = 1 / cadRate;
            textRub.textContent = `1 RUB = ${rubCAD.toFixed(2)} CAD`;
        }
        
        else if (selectOption === "CHF") {
            result.value = +input.value * chfRate;
            textValute.textContent = `1 CHF = ${chfRate.toFixed(2)} RUB`;
            const rubCHF = 1 / chfRate;
            textRub.textContent = `1 RUB = ${rubCHF.toFixed(2)} CHF`;
        }
        
        else if (selectOption === "CNY") {
            result.value = +input.value * cnyRate;
            textValute.textContent = `1 CNY = ${cnyRate.toFixed(2)} RUB`;
            const rubCNY = 1 / cnyRate;
            textRub.textContent = `1 RUB = ${rubCNY.toFixed(2)} CNY`;
        }
        
        else if (selectOption === "CZK") {
            result.value = +input.value * czkRate;
            textValute.textContent = `1 CZK = ${czkRate.toFixed(2)} RUB`;
            const rubCZK = 1 / czkRate;
            textRub.textContent = `1 RUB = ${rubCZK.toFixed(2)} CZK`;
        }
        
        else if (selectOption === "DKK") {
            result.value = +input.value * dkkRate;
            textValute.textContent = `1 DKK = ${dkkRate.toFixed(2)} RUB`;
            const rubDKK = 1 / dkkRate;
            textRub.textContent = `1 RUB = ${rubDKK.toFixed(2)} DKK`;
        }
        
        else if (selectOption === "EGP") {
            result.value = +input.value * egpRate;
            textValute.textContent = `1 EGP = ${egpRate.toFixed(2)} RUB`;
            const rubEGP = 1 / egpRate;
            textRub.textContent = `1 RUB = ${rubEGP.toFixed(2)} EGP`;
        }
        
        else if (selectOption === "EUR") {
            result.value = +input.value * eurRate;
            textValute.textContent = `1 EUR = ${eurRate.toFixed(2)} RUB`;
            const rubEUR = 1 / eurRate;
            textRub.textContent = `1 RUB = ${rubEUR.toFixed(2)} EUR`;
        }
        
        else if (selectOption === "GBP") {
            result.value = +input.value * gbpRate;
            textValute.textContent = `1 GBP = ${gbpRate.toFixed(2)} RUB`;
            const rubGBP = 1 / gbpRate;
            textRub.textContent = `1 RUB = ${rubGBP.toFixed(2)} GBP`;
        }
        
        else if (selectOption === "GEL") {
            result.value = +input.value * gelRate;
            textValute.textContent = `1 GEL = ${gelRate.toFixed(2)} RUB`;
            const rubGEL = 1 / gelRate;
            textRub.textContent = `1 RUB = ${rubGEL.toFixed(2)} GEL`;
        }
        
        else if (selectOption === "HKD") {
            result.value = +input.value * hkdRate;
            textValute.textContent = `1 HKD = ${hkdRate.toFixed(2)} RUB`;
            const rubHKD = 1 / hkdRate;
            textRub.textContent = `1 RUB = ${rubHKD.toFixed(2)} HKD`;
        }
        
        else if (selectOption === "HUF") {
            result.value = +input.value * hufRate;
            textValute.textContent = `1 HUF = ${hufRate.toFixed(2)} RUB`;
            const rubHUF = 1 / hufRate;
            textRub.textContent = `1 RUB = ${rubHUF.toFixed(2)} HUF`;
        }
        
        else if (selectOption === "IDR") {
            result.value = +input.value * idrRate;
            textValute.textContent = `1 IDR = ${idrRate.toFixed(2)} RUB`;
            const rubIDR = 1 / idrRate;
            textRub.textContent = `1 RUB = ${rubIDR.toFixed(2)} IDR`;
        }
        
        else if (selectOption === "INR") {
            result.value = +input.value * inrRate;
            textValute.textContent = `1 INR = ${inrRate.toFixed(2)} RUB`;
            const rubINR = 1 / inrRate;
            textRub.textContent = `1 RUB = ${rubINR.toFixed(2)} INR`;
        }
        
        else if (selectOption === "JPY") {
            result.value = + input.value * jpyRate;
            textValute.textContent = `1 JPY = ${jpyRate.toFixed(2)} RUB`;
            const rubJPY = 1 / jpyRate;
            textRub.textContent = `1 RUB = ${rubJPY.toFixed(2)} JPY`;
        }
        
        else if (selectOption === "KGS") {
            result.value = +input.value * kgsRate;
            textValute.textContent = `1 KGS = ${kgsRate.toFixed(2)} RUB`;
            const rubKGS = 1 / kgsRate;
            textRub.textContent = `1 RUB = ${rubKGS.toFixed(2)} KGS`;
        }
        
        else if (selectOption === "KRW") {
            result.value = +input.value * krwRate;
            textValute.textContent = `1 KRW = ${krwRate.toFixed(2)} RUB`;
            const rubKRW = 1 / krwRate;
            textRub.textContent = `1 RUB = ${rubKRW.toFixed(2)} KRW`;
        }
        
        else if (selectOption === "KZT") {
            result.value = +input.value * kztRate;
            textValute.textContent = `1 KZT = ${kztRate.toFixed(2)} RUB`;
            const rubKZT = 1 / kztRate;
            textRub.textContent = `1 RUB = ${rubKZT.toFixed(2)} KZT`;
        }
        
        else if (selectOption === "MDL") {
            result.value = +input.value * mdlRate;
            textValute.textContent = `1 MDL = ${mdlRate.toFixed(2)} RUB`;
            const rubMDL = 1 / mdlRate;
            textRub.textContent = `1 RUB = ${rubMDL.toFixed(2)} MDL`;
        }
        
        else if (selectOption === "NOK") {
            result.value = +input.value * nokRate;
            textValute.textContent = `1 NOK = ${nokRate.toFixed(2)} RUB`;
            const rubNOK = 1 / nokRate;
            textRub.textContent = `1 RUB = ${rubNOK.toFixed(2)} NOK`;
        }
        
        else if (selectOption === "NZD") {
            result.value = +input.value * nzdRate;
            textValute.textContent = `1 NZD = ${nzdRate.toFixed(2)} RUB`;
            const rubNZD = 1 / nzdRate;
            textRub.textContent = `1 RUB = ${rubNZD.toFixed(2)} NZD`;
        }
        
        else if (selectOption === "PLN") {
            result.value = +input.value * plnRate;
            textValute.textContent = `1 PLN = ${plnRate.toFixed(2)} RUB`;
            const rubPLN = 1 / plnRate;
            textRub.textContent = `1 RUB = ${rubPLN.toFixed(2)} PLN`;
        }
        
        else if (selectOption === "QAR") {
            result.value = +input.value * qarRate;
            textValute.textContent = `1 QAR = ${qarRate.toFixed(2)} RUB`;
            const rubQAR = 1 / qarRate;
            textRub.textContent = `1 RUB = ${rubQAR.toFixed(2)} QAR`;
        }
        
        else if (selectOption === "RON") {
            result.value = +input.value * ronRate;
            textValute.textContent = `1 RON = ${ronRate.toFixed(2)} RUB`;
            const rubRON = 1 / ronRate;
            textRub.textContent = `1 RUB = ${rubRON.toFixed(2)} RON`;
        }
        
        else if (selectOption === "RSD") {
            result.value = +input.value * rsdRate;
            textValute.textContent = `1 RSD = ${rsdRate.toFixed(2)} RUB`;
            const rubRSD = 1 / rsdRate;
            textRub.textContent = `1 RUB = ${rubRSD.toFixed(2)} RSD`;
        }
        
        else if (selectOption === "SEK") {
            result.value = +input.value * sekRate;
            textValute.textContent = `1 SEK = ${sekRate.toFixed(2)} RUB`;
            const rubSEK = 1 / sekRate;
            textRub.textContent = `1 RUB = ${rubSEK.toFixed(2)} SEK`;
        }
        
        else if (selectOption === "SGD") {
            result.value = +input.value * sgdRate;
            textValute.textContent = `1 SGD = ${sgdRate.toFixed(2)} RUB`;
            const rubSGD = 1 / sgdRate;
            textRub.textContent = `1 RUB = ${rubSGD.toFixed(2)} SGD`;
        }
        
        else if (selectOption === "THB") {
            result.value = +input.value * thbRate;
            textValute.textContent = `1 THB = ${thbRate.toFixed(2)} RUB`;
            const rubTHB = 1 / thbRate;
            textRub.textContent = `1 RUB = ${rubTHB.toFixed(2)} THB`;
        }
        
        else if (selectOption === "TJS") {
            result.value = +input.value * tjsRate;
            textValute.textContent = `1 TJS = ${tjsRate.toFixed(2)} RUB`;
            const rubTJS = 1 / tjsRate;
            textRub.textContent = `1 RUB = ${rubTJS.toFixed(2)} TJS`;
        }
        
        else if (selectOption === "TMT") {
            result.value = +input.value * tmtRate;
            textValute.textContent = `1 TMT = ${tmtRate.toFixed(2)} RUB`;
            const rubTMT = 1 / tmtRate;
            textRub.textContent = `1 RUB = ${rubTMT.toFixed(2)} TMT`;
        }
        
        else if (selectOption === "TRY") {
            result.value = +input.value * tryRate;
            textValute.textContent = `1 TRY = ${tryRate.toFixed(2)} RUB`;
            const rubTRY = 1 / tryRate;
            textRub.textContent = `1 RUB = ${rubTRY.toFixed(2)} TRY`;
        }
        
        else if (selectOption === "UAH") {
            result.value = +input.value * uahRate;
            textValute.textContent = `1 UAH = ${uahRate.toFixed(2)} RUB`;
            const rubUAH = 1 / uahRate;
            textRub.textContent = `1 RUB = ${rubUAH.toFixed(2)} UAH`;
        }
        
        else if (selectOption === "USD") {
            result.value = +input.value * usdRate;
            textValute.textContent = `1 USD = ${usdRate.toFixed(2)} RUB`;
            const rubUSD = 1 / usdRate;
            textRub.textContent = `1 RUB = ${rubUSD.toFixed(2)} USD`;
        }
        
        else if (selectOption === "UZS") {
            result.value = +input.value * uzsRate;
            textValute.textContent = `1 UZS = ${uzsRate.toFixed(2)} RUB`;
            const rubUZS = 1 / uzsRate;
            textRub.textContent = `1 RUB = ${rubUZS.toFixed(2)} UZS`;
        }
        
        else if (selectOption === "VND") {
            result.value = +input.value * vndRate;
            textValute.textContent = `1 VND = ${vndRate.toFixed(2)} RUB`;
            const rubVND = 1 / vndRate;
            textRub.textContent = `1 RUB = ${rubVND.toFixed(2)} VND`;
        }
        
        else if (selectOption === "XDR") {
            result.value = +input.value * xdrRate;
            textValute.textContent = `1 XDR = ${xdrRate.toFixed(2)} RUB`;
            const rubXDR = 1 / xdrRate;
            textRub.textContent = `1 RUB = ${rubXDR.toFixed(2)} XDR`;
        }
        
        else if (selectOption === "ZAR") {
            result.value = +input.value * zarRate;
            textValute.textContent = `1 ZAR = ${zarRate.toFixed(2)} RUB`;
            const rubZAR = 1 / zarRate;
            textRub.textContent = `1 RUB = ${rubZAR.toFixed(2)} ZAR`;
        }
    })
    
    
    
    
    
    input.addEventListener('input', function() {
        const selectOption = selectElement.value;
        
        if (selectOption === "AED") {
            result.value = +input.value * aedRate;
            textValute.textContent = `1 AED = ${aedRate.toFixed(2)} RUB`;
            const rubAED = 1 / aedRate;
            textRub.textContent = `1 RUB = ${rubAED.toFixed(2)} AED`;
        }
        
        else if (selectOption === "AMD") {
            result.value = +input.value * amdRate;
            textValute.textContent = `1 AMD = ${amdRate.toFixed(2)} RUB`;
            const rubAMD = 1 / amdRate;
            textRub.textContent = `1 RUB = ${rubAMD.toFixed(2)} AMD`;
        }
        
        else if (selectOption === "AUD") {
            result.value = +input.value * audRate;
            textValute.textContent = `1 AUD = ${audRate.toFixed(2)} RUB`;
            const rubAUD = 1 / audRate;
            textRub.textContent = `1 RUB = ${rubAUD.toFixed(2)} AUD`;
        }
        
        else if (selectOption === "AZN") {
            result.value = +input.value * aznRate;
            textValute.textContent = `1 AZN = ${aznRate.toFixed(2)} RUB`;
            const rubAZN = 1 / aznRate;
            textRub.textContent = `1 RUB = ${rubAZN.toFixed(2)} AZN`;
        }
        
        else if (selectOption === "BGN") {
            result.value = +input.value * bgnRate;
            textValute.textContent = `1 BGN = ${bgnRate.toFixed(2)} RUB`;
            const rubBGN = 1 / bgnRate;
            textRub.textContent = `1 RUB = ${rubBGN.toFixed(2)} BGN`;
        }
        
        else if (selectOption === "BRL") {
            result.value = +input.valuBRL * brlRate;
            textValute.textContent = `1 BRL = ${brlRate.toFixed(2)} RUB`;
            const rubBRL = 1 / brlRate;
            textRub.textContent = `1 RUB = ${rubBRL.toFixed(2)} BRL`;
        }
        
        else if (selectOption === "BYN") {
            result.value = +input.value * bynRate;
            textValute.textContent = `1 BYN = ${bynRate.toFixed(2)} RUB`;
            const rubBYN = 1 / bynRate;
            textRub.textContent = `1 RUB = ${rubBYN.toFixed(2)} BYN`;
        }
        
        else if (selectOption === "CAD") {
            result.value = +input.value * cadRate;
            textValute.textContent = `1 CAD = ${cadRate.toFixed(2)} RUB`;
            const rubCAD = 1 / cadRate;
            textRub.textContent = `1 RUB = ${rubCAD.toFixed(2)} CAD`;
        }
        
        else if (selectOption === "CHF") {
            result.value = +input.value * chfRate;
            textValute.textContent = `1 CHF = ${chfRate.toFixed(2)} RUB`;
            const rubCHF = 1 / chfRate;
            textRub.textContent = `1 RUB = ${rubCHF.toFixed(2)} CHF`;
        }
        
        else if (selectOption === "CNY") {
            result.value = +input.value * cnyRate;
            textValute.textContent = `1 CNY = ${cnyRate.toFixed(2)} RUB`;
            const rubCNY = 1 / cnyRate;
            textRub.textContent = `1 RUB = ${rubCNY.toFixed(2)} CNY`;
        }
        
        else if (selectOption === "CZK") {
            result.value = +input.value * czkRate;
            textValute.textContent = `1 CZK = ${czkRate.toFixed(2)} RUB`;
            const rubCZK = 1 / czkRate;
            textRub.textContent = `1 RUB = ${rubCZK.toFixed(2)} CZK`;
        }
        
        else if (selectOption === "DKK") {
            result.value = +input.value * dkkRate;
            textValute.textContent = `1 DKK = ${dkkRate.toFixed(2)} RUB`;
            const rubDKK = 1 / dkkRate;
            textRub.textContent = `1 RUB = ${rubDKK.toFixed(2)} DKK`;
        }
        
        else if (selectOption === "EGP") {
            result.value = +input.value * egpRate;
            textValute.textContent = `1 EGP = ${egpRate.toFixed(2)} RUB`;
            const rubEGP = 1 / egpRate;
            textRub.textContent = `1 RUB = ${rubEGP.toFixed(2)} EGP`;
        }
        
        else if (selectOption === "EUR") {
            result.value = +input.value * eurRate;
            textValute.textContent = `1 EUR = ${eurRate.toFixed(2)} RUB`;
            const rubEUR = 1 / eurRate;
            textRub.textContent = `1 RUB = ${rubEUR.toFixed(2)} EUR`;
        }
        
        else if (selectOption === "GBP") {
            result.value = +input.value * gbpRate;
            textValute.textContent = `1 GBP = ${gbpRate.toFixed(2)} RUB`;
            const rubGBP = 1 / gbpRate;
            textRub.textContent = `1 RUB = ${rubGBP.toFixed(2)} GBP`;
        }
        
        else if (selectOption === "GEL") {
            result.value = +input.value * gelRate;
            textValute.textContent = `1 GEL = ${gelRate.toFixed(2)} RUB`;
            const rubGEL = 1 / gelRate;
            textRub.textContent = `1 RUB = ${rubGEL.toFixed(2)} GEL`;
        }
        
        else if (selectOption === "HKD") {
            result.value = +input.value * hkdRate;
            textValute.textContent = `1 HKD = ${hkdRate.toFixed(2)} RUB`;
            const rubHKD = 1 / hkdRate;
            textRub.textContent = `1 RUB = ${rubHKD.toFixed(2)} HKD`;
        }
        
        else if (selectOption === "HUF") {
            result.value = +input.value * hufRate;
            textValute.textContent = `1 HUF = ${hufRate.toFixed(2)} RUB`;
            const rubHUF = 1 / hufRate;
            textRub.textContent = `1 RUB = ${rubHUF.toFixed(2)} HUF`;
        }
        
        else if (selectOption === "IDR") {
            result.value = +input.value * idrRate;
            textValute.textContent = `1 IDR = ${idrRate.toFixed(2)} RUB`;
            const rubIDR = 1 / idrRate;
            textRub.textContent = `1 RUB = ${rubIDR.toFixed(2)} IDR`;
        }
        
        else if (selectOption === "INR") {
            result.value = +input.value * inrRate;
            textValute.textContent = `1 INR = ${inrRate.toFixed(2)} RUB`;
            const rubINR = 1 / inrRate;
            textRub.textContent = `1 RUB = ${rubINR.toFixed(2)} INR`;
        }
        
        else if (selectOption === "JPY") {
            result.value = + input.value * jpyRate;
            textValute.textContent = `1 JPY = ${jpyRate.toFixed(2)} RUB`;
            const rubJPY = 1 / jpyRate;
            textRub.textContent = `1 RUB = ${rubJPY.toFixed(2)} JPY`;
        }
        
        else if (selectOption === "KGS") {
            result.value = +input.value * kgsRate;
            textValute.textContent = `1 KGS = ${kgsRate.toFixed(2)} RUB`;
            const rubKGS = 1 / kgsRate;
            textRub.textContent = `1 RUB = ${rubKGS.toFixed(2)} KGS`;
        }
        
        else if (selectOption === "KRW") {
            result.value = +input.value * krwRate;
            textValute.textContent = `1 KRW = ${krwRate.toFixed(2)} RUB`;
            const rubKRW = 1 / krwRate;
            textRub.textContent = `1 RUB = ${rubKRW.toFixed(2)} KRW`;
        }
        
        else if (selectOption === "KZT") {
            result.value = +input.value * kztRate;
            textValute.textContent = `1 KZT = ${kztRate.toFixed(2)} RUB`;
            const rubKZT = 1 / kztRate;
            textRub.textContent = `1 RUB = ${rubKZT.toFixed(2)} KZT`;
        }
        
        else if (selectOption === "MDL") {
            result.value = +input.value * mdlRate;
            textValute.textContent = `1 MDL = ${mdlRate.toFixed(2)} RUB`;
            const rubMDL = 1 / mdlRate;
            textRub.textContent = `1 RUB = ${rubMDL.toFixed(2)} MDL`;
        }
        
        else if (selectOption === "NOK") {
            result.value = +input.value * nokRate;
            textValute.textContent = `1 NOK = ${nokRate.toFixed(2)} RUB`;
            const rubNOK = 1 / nokRate;
            textRub.textContent = `1 RUB = ${rubNOK.toFixed(2)} NOK`;
        }
        
        else if (selectOption === "NZD") {
            result.value = +input.value * nzdRate;
            textValute.textContent = `1 NZD = ${nzdRate.toFixed(2)} RUB`;
            const rubNZD = 1 / nzdRate;
            textRub.textContent = `1 RUB = ${rubNZD.toFixed(2)} NZD`;
        }
        
        else if (selectOption === "PLN") {
            result.value = +input.value * plnRate;
            textValute.textContent = `1 PLN = ${plnRate.toFixed(2)} RUB`;
            const rubPLN = 1 / plnRate;
            textRub.textContent = `1 RUB = ${rubPLN.toFixed(2)} PLN`;
        }
        
        else if (selectOption === "QAR") {
            result.value = +input.value * qarRate;
            textValute.textContent = `1 QAR = ${qarRate.toFixed(2)} RUB`;
            const rubQAR = 1 / qarRate;
            textRub.textContent = `1 RUB = ${rubQAR.toFixed(2)} QAR`;
        }
        
        else if (selectOption === "RON") {
            result.value = +input.value * ronRate;
            textValute.textContent = `1 RON = ${ronRate.toFixed(2)} RUB`;
            const rubRON = 1 / ronRate;
            textRub.textContent = `1 RUB = ${rubRON.toFixed(2)} RON`;
        }
        
        else if (selectOption === "RSD") {
            result.value = +input.value * rsdRate;
            textValute.textContent = `1 RSD = ${rsdRate.toFixed(2)} RUB`;
            const rubRSD = 1 / rsdRate;
            textRub.textContent = `1 RUB = ${rubRSD.toFixed(2)} RSD`;
        }
        
        else if (selectOption === "SEK") {
            result.value = +input.value * sekRate;
            textValute.textContent = `1 SEK = ${sekRate.toFixed(2)} RUB`;
            const rubSEK = 1 / sekRate;
            textRub.textContent = `1 RUB = ${rubSEK.toFixed(2)} SEK`;
        }
        
        else if (selectOption === "SGD") {
            result.value = +input.value * sgdRate;
            textValute.textContent = `1 SGD = ${sgdRate.toFixed(2)} RUB`;
            const rubSGD = 1 / sgdRate;
            textRub.textContent = `1 RUB = ${rubSGD.toFixed(2)} SGD`;
        }
        
        else if (selectOption === "THB") {
            result.value = +input.value * thbRate;
            textValute.textContent = `1 THB = ${thbRate.toFixed(2)} RUB`;
            const rubTHB = 1 / thbRate;
            textRub.textContent = `1 RUB = ${rubTHB.toFixed(2)} THB`;
        }
        
        else if (selectOption === "TJS") {
            result.value = +input.value * tjsRate;
            textValute.textContent = `1 TJS = ${tjsRate.toFixed(2)} RUB`;
            const rubTJS = 1 / tjsRate;
            textRub.textContent = `1 RUB = ${rubTJS.toFixed(2)} TJS`;
        }
        
        else if (selectOption === "TMT") {
            result.value = +input.value * tmtRate;
            textValute.textContent = `1 TMT = ${tmtRate.toFixed(2)} RUB`;
            const rubTMT = 1 / tmtRate;
            textRub.textContent = `1 RUB = ${rubTMT.toFixed(2)} TMT`;
        }
        
        else if (selectOption === "TRY") {
            result.value = +input.value * tryRate;
            textValute.textContent = `1 TRY = ${tryRate.toFixed(2)} RUB`;
            const rubTRY = 1 / tryRate;
            textRub.textContent = `1 RUB = ${rubTRY.toFixed(2)} TRY`;
        }
        
        else if (selectOption === "UAH") {
            result.value = +input.value * uahRate;
            textValute.textContent = `1 UAH = ${uahRate.toFixed(2)} RUB`;
            const rubUAH = 1 / uahRate;
            textRub.textContent = `1 RUB = ${rubUAH.toFixed(2)} UAH`;
        }
        
        else if (selectOption === "USD") {
            result.value = +input.value * usdRate;
            textValute.textContent = `1 USD = ${usdRate.toFixed(2)} RUB`;
            const rubUSD = 1 / usdRate;
            textRub.textContent = `1 RUB = ${rubUSD.toFixed(2)} USD`;
        }
        
        else if (selectOption === "UZS") {
            result.value = +input.value * uzsRate;
            textValute.textContent = `1 UZS = ${uzsRate.toFixed(2)} RUB`;
            const rubUZS = 1 / uzsRate;
            textRub.textContent = `1 RUB = ${rubUZS.toFixed(2)} UZS`;
        }
        
        else if (selectOption === "VND") {
            result.value = +input.value * vndRate;
            textValute.textContent = `1 VND = ${vndRate.toFixed(2)} RUB`;
            const rubVND = 1 / vndRate;
            textRub.textContent = `1 RUB = ${rubVND.toFixed(2)} VND`;
        }
        
        else if (selectOption === "XDR") {
            result.value = +input.value * xdrRate;
            textValute.textContent = `1 XDR = ${xdrRate.toFixed(2)} RUB`;
            const rubXDR = 1 / xdrRate;
            textRub.textContent = `1 RUB = ${rubXDR.toFixed(2)} XDR`;
        }
        
        else if (selectOption === "ZAR") {
            result.value = +input.value * zarRate;
            textValute.textContent = `1 ZAR = ${zarRate.toFixed(2)} RUB`;
            const rubZAR = 1 / zarRate;
            textRub.textContent = `1 RUB = ${rubZAR.toFixed(2)} ZAR`;
        }
    })
};
getCurrencies()

