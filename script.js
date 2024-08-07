let x = document.getElementById("logo")
function changelogo()
  {
    x.setAttribute('src',"./images/pepsi-logo.jpg")
    x.style.height="150px"

  }

function reset()
  {
    x.setAttribute('src',"./images/coca-cola.jpg")
    x.style.height="150px"
  }