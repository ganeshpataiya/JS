// Write a Javascript program to pretend to look like a hacker. Write an Async function which will wimply display the following output: 
// Initialiging Hack program....
// Hacking Ashish's UserName...
// Username found asshish17...
// Connecting to Facebook...
let p = document.createElement("p").textContent += "your Mobile is HACKED!";
document.body.append(p)

let doc = document.getElementById("hacker")

let hacker1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      doc.innerHTML += "<h1>Initialiging Hack program....</h1>"
      resolve(10)
    }, 1000)
  })

}

let hacker2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20)
       doc.innerHTML += "<h1>Hacking Praggya Narware UserName...</h1>"
    }, 2000)
  })
}


let hacker3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30)
        doc.innerHTML += "<h1>Username found PraggyaP...</h1>"
    }, 3000)
  })
}

let hacker4 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(40)
       doc.innerHTML += "<h1>Connecting to Facebook...</h1>"
    }, 4000)
  })
}

const hacker = async()=> {
  let h1 = hacker1();
  let h2 = hacker2();
  let h3 = hacker3();
  let h4 = hacker4();
let h = await Promise.all([h1, h2, h3, h4])
}

hacker()
