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
        converter()
    });
    
    
    input.addEventListener('input', function() {
        converter()
    });
    
    
  function converter() {
      const selectOption = selectElement.value;
        
        if (selectOption === "AED") {
            const inputRoundUp = +input.value * aedRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 AED = ${aedRate.toFixed(2)} RUB`;
            const rubAED = 1 / aedRate;
            textRub.textContent = `1 RUB = ${rubAED.toFixed(2)} AED`;
        }
        
        else if (selectOption === "AMD") {
            const inputRoundUp = +input.value * amdRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 AMD = ${amdRate.toFixed(2)} RUB`;
            const rubAMD = 1 / amdRate;
            textRub.textContent = `1 RUB = ${rubAMD.toFixed(2)} AMD`;
        }
        
        else if (selectOption === "AUD") {
            const inputRoundUp = +input.value * audRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 AUD = ${audRate.toFixed(2)} RUB`;
            const rubAUD = 1 / audRate;
            textRub.textContent = `1 RUB = ${rubAUD.toFixed(2)} AUD`;
        }
        
        else if (selectOption === "AZN") {
            const inputRoundUp = +input.value * aznRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 AZN = ${aznRate.toFixed(2)} RUB`;
            const rubAZN = 1 / aznRate;
            textRub.textContent = `1 RUB = ${rubAZN.toFixed(2)} AZN`;
        }
        
        else if (selectOption === "BGN") {
            const inputRoundUp = +input.value * bgnRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 BGN = ${bgnRate.toFixed(2)} RUB`;
            const rubBGN = 1 / bgnRate;
            textRub.textContent = `1 RUB = ${rubBGN.toFixed(2)} BGN`;
        }
        
        else if (selectOption === "BRL") {
            const inputRoundUp = +input.valuBRL * brlRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 BRL = ${brlRate.toFixed(2)} RUB`;
            const rubBRL = 1 / brlRate;
            textRub.textContent = `1 RUB = ${rubBRL.toFixed(2)} BRL`;
        }
        
        else if (selectOption === "BYN") {
            const inputRoundUp = +input.value * bynRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 BYN = ${bynRate.toFixed(2)} RUB`;
            const rubBYN = 1 / bynRate;
            textRub.textContent = `1 RUB = ${rubBYN.toFixed(2)} BYN`;
        }
        
        else if (selectOption === "CAD") {
            const inputRoundUp = +input.value * cadRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 CAD = ${cadRate.toFixed(2)} RUB`;
            const rubCAD = 1 / cadRate;
            textRub.textContent = `1 RUB = ${rubCAD.toFixed(2)} CAD`;
        }
        
        else if (selectOption === "CHF") {
            const inputRoundUp = +input.value * chfRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 CHF = ${chfRate.toFixed(2)} RUB`;
            const rubCHF = 1 / chfRate;
            textRub.textContent = `1 RUB = ${rubCHF.toFixed(2)} CHF`;
        }
        
        else if (selectOption === "CNY") {
            const inputRoundUp = +input.value * cnyRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 CNY = ${cnyRate.toFixed(2)} RUB`;
            const rubCNY = 1 / cnyRate;
            textRub.textContent = `1 RUB = ${rubCNY.toFixed(2)} CNY`;
        }
        
        else if (selectOption === "CZK") {
            const inputRoundUp = +input.value * czkRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 CZK = ${czkRate.toFixed(2)} RUB`;
            const rubCZK = 1 / czkRate;
            textRub.textContent = `1 RUB = ${rubCZK.toFixed(2)} CZK`;
        }
        
        else if (selectOption === "DKK") {
            const inputRoundUp = +input.value * dkkRate;
            result.value = inputRoundUp.toFixed(2); 
            textValute.textContent = `1 DKK = ${dkkRate.toFixed(2)} RUB`;
            const rubDKK = 1 / dkkRate;
            textRub.textContent = `1 RUB = ${rubDKK.toFixed(2)} DKK`;
        }
        
        else if (selectOption === "EGP") {
            const inputRoundUp = +input.value * egpRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 EGP = ${egpRate.toFixed(2)} RUB`;
            const rubEGP = 1 / egpRate;
            textRub.textContent = `1 RUB = ${rubEGP.toFixed(2)} EGP`;
        }
        
        else if (selectOption === "EUR") {
            const inputRoundUp = +input.value * eurRate;
            result.value = inputRoundUp.toFixed(2); 
            textValute.textContent = `1 EUR = ${eurRate.toFixed(2)} RUB`;
            const rubEUR = 1 / eurRate;
            textRub.textContent = `1 RUB = ${rubEUR.toFixed(2)} EUR`;
        }
        
        else if (selectOption === "GBP") {
            const inputRoundUp = +input.value * gbpRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 GBP = ${gbpRate.toFixed(2)} RUB`;
            const rubGBP = 1 / gbpRate;
            textRub.textContent = `1 RUB = ${rubGBP.toFixed(2)} GBP`;
        }
        
        else if (selectOption === "GEL") {
            const inputRoundUp = +input.value * gelRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 GEL = ${gelRate.toFixed(2)} RUB`;
            const rubGEL = 1 / gelRate;
            textRub.textContent = `1 RUB = ${rubGEL.toFixed(2)} GEL`;
        }
        
        else if (selectOption === "HKD") {
            const inputRoundUp = +input.value * hkdRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 HKD = ${hkdRate.toFixed(2)} RUB`;
            const rubHKD = 1 / hkdRate;
            textRub.textContent = `1 RUB = ${rubHKD.toFixed(2)} HKD`;
        }
        
        else if (selectOption === "HUF") {
            const inputRoundUp = +input.value * hufRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 HUF = ${hufRate.toFixed(2)} RUB`;
            const rubHUF = 1 / hufRate;
            textRub.textContent = `1 RUB = ${rubHUF.toFixed(2)} HUF`;
        }
        
        else if (selectOption === "IDR") {
            const inputRoundUp = +input.value * idrRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 IDR = ${idrRate.toFixed(2)} RUB`;
            const rubIDR = 1 / idrRate;
            textRub.textContent = `1 RUB = ${rubIDR.toFixed(2)} IDR`;
        }
        
        else if (selectOption === "INR") {
            const inputRoundUp = +input.value * inrRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 INR = ${inrRate.toFixed(2)} RUB`;
            const rubINR = 1 / inrRate;
            textRub.textContent = `1 RUB = ${rubINR.toFixed(2)} INR`;
        }
        
        else if (selectOption === "JPY") {
            const inputRoundUp = +input.value * jpyRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 JPY = ${jpyRate.toFixed(2)} RUB`;
            const rubJPY = 1 / jpyRate;
            textRub.textContent = `1 RUB = ${rubJPY.toFixed(2)} JPY`;
        }
        
        else if (selectOption === "KGS") {
            const inputRoundUp = +input.value * kgsRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 KGS = ${kgsRate.toFixed(2)} RUB`;
            const rubKGS = 1 / kgsRate;
            textRub.textContent = `1 RUB = ${rubKGS.toFixed(2)} KGS`;
        }
        
        else if (selectOption === "KRW") {
            const inputRoundUp = +input.value * krwRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 KRW = ${krwRate.toFixed(2)} RUB`;
            const rubKRW = 1 / krwRate;
            textRub.textContent = `1 RUB = ${rubKRW.toFixed(2)} KRW`;
        }
        
        else if (selectOption === "KZT") {
            const inputRoundUp = +input.value * kztRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 KZT = ${kztRate.toFixed(2)} RUB`;
            const rubKZT = 1 / kztRate;
            textRub.textContent = `1 RUB = ${rubKZT.toFixed(2)} KZT`;
        }
        
        else if (selectOption === "MDL") {
            const inputRoundUp = +input.value * mdlRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 MDL = ${mdlRate.toFixed(2)} RUB`;
            const rubMDL = 1 / mdlRate;
            textRub.textContent = `1 RUB = ${rubMDL.toFixed(2)} MDL`;
        }
        
        else if (selectOption === "NOK") {
            const inputRoundUp = +input.value * nokRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 NOK = ${nokRate.toFixed(2)} RUB`;
            const rubNOK = 1 / nokRate;
            textRub.textContent = `1 RUB = ${rubNOK.toFixed(2)} NOK`;
        }
        
        else if (selectOption === "NZD") {
            const inputRoundUp = +input.value * nzdRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 NZD = ${nzdRate.toFixed(2)} RUB`;
            const rubNZD = 1 / nzdRate;
            textRub.textContent = `1 RUB = ${rubNZD.toFixed(2)} NZD`;
        }
        
        else if (selectOption === "PLN") {
            const inputRoundUp = +input.value * plnRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 PLN = ${plnRate.toFixed(2)} RUB`;
            const rubPLN = 1 / plnRate;
            textRub.textContent = `1 RUB = ${rubPLN.toFixed(2)} PLN`;
        }
        
        else if (selectOption === "QAR") {
            const inputRoundUp = +input.value * qarRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 QAR = ${qarRate.toFixed(2)} RUB`;
            const rubQAR = 1 / qarRate;
            textRub.textContent = `1 RUB = ${rubQAR.toFixed(2)} QAR`;
        }
        
        else if (selectOption === "RON") {
            const inputRoundUp = +input.value * ronRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 RON = ${ronRate.toFixed(2)} RUB`;
            const rubRON = 1 / ronRate;
            textRub.textContent = `1 RUB = ${rubRON.toFixed(2)} RON`;
        }
        
        else if (selectOption === "RSD") {
            const inputRoundUp = +input.value * rsdRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 RSD = ${rsdRate.toFixed(2)} RUB`;
            const rubRSD = 1 / rsdRate;
            textRub.textContent = `1 RUB = ${rubRSD.toFixed(2)} RSD`;
        }
        
        else if (selectOption === "SEK") {
            const inputRoundUp = +input.value * sekRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 SEK = ${sekRate.toFixed(2)} RUB`;
            const rubSEK = 1 / sekRate;
            textRub.textContent = `1 RUB = ${rubSEK.toFixed(2)} SEK`;
        }
        
        else if (selectOption === "SGD") {
            const inputRoundUp = +input.value * sgdRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 SGD = ${sgdRate.toFixed(2)} RUB`;
            const rubSGD = 1 / sgdRate;
            textRub.textContent = `1 RUB = ${rubSGD.toFixed(2)} SGD`;
        }
        
        else if (selectOption === "THB") {
            const inputRoundUp = +input.value * thbRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 THB = ${thbRate.toFixed(2)} RUB`;
            const rubTHB = 1 / thbRate;
            textRub.textContent = `1 RUB = ${rubTHB.toFixed(2)} THB`;
        }
        
        else if (selectOption === "TJS") {
            const inputRoundUp = +input.value * tjsRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 TJS = ${tjsRate.toFixed(2)} RUB`;
            const rubTJS = 1 / tjsRate;
            textRub.textContent = `1 RUB = ${rubTJS.toFixed(2)} TJS`;
        }
        
        else if (selectOption === "TMT") {
            const inputRoundUp = +input.value * tmtRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 TMT = ${tmtRate.toFixed(2)} RUB`;
            const rubTMT = 1 / tmtRate;
            textRub.textContent = `1 RUB = ${rubTMT.toFixed(2)} TMT`;
        }
        
        else if (selectOption === "TRY") {
            const inputRoundUp = +input.value * tryRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 TRY = ${tryRate.toFixed(2)} RUB`;
            const rubTRY = 1 / tryRate;
            textRub.textContent = `1 RUB = ${rubTRY.toFixed(2)} TRY`;
        }
        
        else if (selectOption === "UAH") {
            const inputRoundUp = +input.value * uahRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 UAH = ${uahRate.toFixed(2)} RUB`;
            const rubUAH = 1 / uahRate;
            textRub.textContent = `1 RUB = ${rubUAH.toFixed(2)} UAH`;
        }
        
        else if (selectOption === "USD") {
            const inputRoundUp = +input.value * usdRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 USD = ${usdRate.toFixed(2)} RUB`;
            const rubUSD = 1 / usdRate;
            textRub.textContent = `1 RUB = ${rubUSD.toFixed(2)} USD`;
        }
        
        else if (selectOption === "UZS") {
            const inputRoundUp = +input.value * uzsRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 UZS = ${uzsRate.toFixed(2)} RUB`;
            const rubUZS = 1 / uzsRate;
            textRub.textContent = `1 RUB = ${rubUZS.toFixed(2)} UZS`;
        }
        
        else if (selectOption === "VND") {
            const inputRoundUp = +input.value * vndRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 VND = ${vndRate.toFixed(2)} RUB`;
            const rubVND = 1 / vndRate;
            textRub.textContent = `1 RUB = ${rubVND.toFixed(2)} VND`;
        }
        
        else if (selectOption === "XDR") {
            const inputRoundUp = +input.value * xdrRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 XDR = ${xdrRate.toFixed(2)} RUB`;
            const rubXDR = 1 / xdrRate;
            textRub.textContent = `1 RUB = ${rubXDR.toFixed(2)} XDR`;
        }
        
        else if (selectOption === "ZAR") {
            const inputRoundUp = +input.value * zarRate;
            result.value = inputRoundUp.toFixed(2);
            textValute.textContent = `1 ZAR = ${zarRate.toFixed(2)} RUB`;
            const rubZAR = 1 / zarRate;
            textRub.textContent = `1 RUB = ${rubZAR.toFixed(2)} ZAR`;
        }
  }; 
};
getCurrencies()

