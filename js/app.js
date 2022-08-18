function getElementValue(idValue) {
    const element = document.getElementById(idValue);
    const elementValue = parseFloat(element.value);
    element.value = "";
    return elementValue;
}
function getElementText(idText) {
    const element = document.getElementById(idText);
    const elementText = parseFloat(element.innerText);
    return elementText;
}
function setInnerText(textId, textValue) {
    const setText = document.getElementById(textId)
    setText.innerText = textValue;
}



document.getElementById('btn-deposit').addEventListener("click", function () {
    const depositeValue = getElementValue("input-deposite")
    if (isNaN(depositeValue)) {
        alert('Please enter amount')
    }
    else {
        const depositDisplay = getElementText("display-deposit")
        const totalDeposit = depositeValue + depositDisplay;
        setInnerText("display-deposit", totalDeposit)
        const prevasBlance = getElementText("display-balance");
        const carantBlance = prevasBlance + depositeValue;
        setInnerText("display-balance", carantBlance)
    }


})
document.getElementById('btn-withdrow').addEventListener("click", function () {
    const withdrowInput = getElementValue('input-withdrow')
    if (isNaN(withdrowInput)) {
        alert('Please enter amount')
    }
    else {
        const depositDisplay = getElementText('display-withdrow')
        const totalWithdrow = withdrowInput + depositDisplay;

        const prevasBlance = getElementText("display-balance");
        if (prevasBlance < withdrowInput) {
            alert('low blance')
        }
        else {
            const carantBlance = prevasBlance - withdrowInput;
            setInnerText("display-balance", carantBlance)
            setInnerText("display-withdrow", totalWithdrow)
        }

    }
})