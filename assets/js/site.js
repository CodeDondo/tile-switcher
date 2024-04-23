// write cool JS hwere!!
let mainImage = document.getElementById('mainImage')

let smallImageOne = document.getElementById('imgOne')
let smallImageTwo = document.getElementById('imgTwo')
let smallImageThree = document.getElementById('imgThree')
let smallImageFour = document.getElementById('imgFour')




smallImageOne.addEventListener('click', (event) => {

    ChangeImage(smallImageOne)
})

smallImageTwo.addEventListener('click', (event) => {

    ChangeImage(smallImageTwo)
})

smallImageThree.addEventListener('click', (event) => {

    ChangeImage(smallImageThree)
})

smallImageFour.addEventListener('click', (event) => {

    ChangeImage(smallImageFour)
})

function ChangeImage(smallImageReciver) {

    let bigImageUrl = mainImage.src

    mainImage.src = smallImageReciver.src
    smallImageReciver.src = bigImageUrl
}