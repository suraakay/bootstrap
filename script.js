const sky = document.querySelector('#sky')
const mountLeft = document.querySelector('#moun2')
const mountRightBack = document.querySelector('#moun3')
const mountRightFront = document.querySelector('#moun1')
const person = document.querySelector('#person')
let rightFrontBottom = parseInt(window.getComputedStyle(mountRightFront, null).getPropertyValue("bottom"))
let rightBackBottom = parseInt(window.getComputedStyle(mountRightBack, null).getPropertyValue("bottom"))
let leftFrontBottom = parseInt(window.getComputedStyle(mountLeft, null).getPropertyValue("bottom"))
let topSky = parseInt(window.getComputedStyle(sky, null).getPropertyValue("top"))

window.addEventListener('scroll', () => {
    let number = Math.floor(window.pageYOffset)


    if (number >= 565) return
    console.log(topSky)
    sky.style.top = `${topSky + (Math.floor((number / 4)))}px`
    person.style.bottom = `${-150 + (Math.floor((number / 2.8)))}px`
    mountRightFront.style.bottom = `${(Math.floor(rightFrontBottom + (number / 3)))}px`
    mountRightBack.style.bottom = `${(Math.floor(rightBackBottom + (-number / 6)))}px`
    mountLeft.style.bottom = `${(Math.floor(leftFrontBottom + (-number / 20)))}px`


})