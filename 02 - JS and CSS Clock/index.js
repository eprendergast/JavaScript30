document.addEventListener("DOMContentLoaded", () => {
    setInterval(setDate, 1000);
})

const setDate = () => {
    let dateTime = new Date();
    let timeAttributes = getTimeAttributes(dateTime);

    timeAttributes.forEach(attribute => {
        setHandPosition(attribute);
    })
}

const setHandPosition = (attribute) => {
    let degrees = ((attribute.time/attribute.denominator) * 360) + 90;
    if (degrees == 90){
        attribute.hand.style.transition = `none`;
        attribute.hand.style.transform = `rotate(${degrees}deg)`;
        attribute.hand.style.transition = `all 0.05s`;
    } else {
        attribute.hand.style.transform = `rotate(${degrees}deg)`;
    }
}

const getTimeAttributes = (dateTime) => {
    return [
        {
            time: dateTime.getSeconds(),
            denominator: 60,
            hand: document.querySelector("div.hand.second-hand")
        }, 
        {
            time: dateTime.getMinutes(),
            denominator: 60,
            hand: document.querySelector("div.hand.min-hand")
        },
        {
            time: dateTime.getHours(),
            denominator: 12,
            hand: document.querySelector("div.hand.hour-hand")
        }
    ]
}


