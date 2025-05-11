var original = document.getElementById('original')
var img1 = document.getElementById('img1')
var img2 = document.getElementById('img2')
var img3 = document.getElementById('img3')
var img4 = document.getElementById('img4')
var img5 = document.getElementById('img5')

var pic1 = document.getElementById('pic1')
var pic2 = document.getElementById('pic2')
var pic3 = document.getElementById('pic3')
var pic4 = document.getElementById('pic4')
var pic5 = document.getElementById('pic5')

img1.addEventListener('dragover' , (e) => e.preventDefault())

img1.addEventListener('drop' , () =>{
    img1.appendChild(pic1)
})

img2.addEventListener('dragover' , (e) => e.preventDefault())

img2.addEventListener('drop' , () =>{
    img2.appendChild(pic4)
})

img3.addEventListener('dragover' , (e) => e.preventDefault())

img3.addEventListener('drop' , () =>{
    img3.appendChild(pic5)
})

img5.addEventListener('dragover' , (e) => e.preventDefault())

img5.addEventListener('drop' , () =>{
    img5.appendChild(pic2)
})

img4.addEventListener('dragover' , (e) => e.preventDefault())

img4.addEventListener('drop' , () =>{
    img4.appendChild(pic3)
})