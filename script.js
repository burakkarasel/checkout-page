// remove button

const rmvButtonDOM = document.querySelectorAll(".rmv-btn")

rmvButtonDOM.forEach(item => {
    item.addEventListener("click", () => {
        item.parentElement.parentElement.parentElement.style.display = "none"

        /* item.parentElement.parentElement.querySelector(".count>.quantity").innerHTML = 0 */

        item.parentElement.nextElementSibling.querySelector("p>span").innerHTML = 0

        updateTotal()
    })
})

// updating inner price

const totalAmtDOM = document.querySelectorAll(".total-amt")

const updateInnerPrice = function() {
    totalAmtDOM.forEach((item) => {
        const parent = item.parentNode.parentNode.parentNode

        const unitPrice = parent.querySelector(".item-detail>.price-text>.price-num").innerHTML

        const quantity = parent.querySelector(".count>.quantity").innerHTML

        item.innerHTML = (unitPrice * quantity).toFixed(2)
    })
}


// increase - decrease buttons

const decButtonsDOM = document.querySelectorAll(".dec")

decButtonsDOM.forEach( item => {
    const result = item.nextElementSibling

    item.addEventListener("click", ()=>{
        if(result.innerHTML > 1){
            result.innerHTML--
        }
        updateInnerPrice()
        updateTotal()
    })
})

const incButtonsDOM = document.querySelectorAll(".inc")

incButtonsDOM.forEach(item => {
    const result = item.previousElementSibling
    item.addEventListener("click", ()=> {
        result.innerHTML++
        updateInnerPrice()
        updateTotal()
    })
})

// arranging 

const totalDOM = document.querySelector("#total")

const subTotalDOM = document.querySelector("#subtotal")

const taxDOM = document.querySelector("#tax")

const updateTotal = function() {
    let endTotal = 0

    totalAmtDOM.forEach(item => {
        endTotal += +item.innerHTML
    })

    subTotalDOM.innerHTML = endTotal.toFixed(2)

    taxDOM.innerHTML = (endTotal * 18 / 100).toFixed(2)

    if(subTotalDOM.innerHTML !== "0.00"){
        totalDOM.innerHTML = (endTotal + (endTotal * 18 / 100) + 15).toFixed(2)
    }else{
        totalDOM.innerHTML = subTotalDOM.innerHTML
    }
}

updateTotal()