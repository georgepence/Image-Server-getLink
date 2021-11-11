async function getDiv1() {
  return new Promise((resolve) => {
    console.log("Working in getDiv1")
    fetch('http://localhost:5000/getImage?response_type=link')
        .then(res => res.json())
        .then(data => {
          resolve(`<img src=${data} alt='random image' />`)
        })
  })
}

async function getDiv3() {
  return new Promise((resolve) => {
    console.log("Working in getDiv3")
    fetch('http://localhost:5000/getImage?response_type=random')
        .then(res => res.json())
        .then(data => {
          resolve(`<img src=${data} alt='random image' />`)
        })
  })
}

async function getDiv4() {
  return new Promise((resolve) => {
    console.log("Working in getDiv4")
    document.getElementById("image-div-4")
        .innerHTML = "<h2 style='color:mediumblue'>Loading...</h2>"
    fetch('http://localhost:5000/getImage?response_type=link&searchTerms=cougar')
        .then(res => res.json())
        .then(data => {
          resolve(`<img src=${data} alt='random image' />`)
        })
  })
}

async function getImages() {
  
  document.getElementById("image-div").innerHTML = await getDiv1()
  console.log("Div1 Done")
  
  document.getElementById("image-div-3").innerHTML = await getDiv3()
  console.log("Div3 Done")
  
  document.getElementById("image-div-4").innerHTML = await getDiv4()
  console.log("Div4 Done")
  
}

getImages().then(() => console.log("D O N E ! ! !"))