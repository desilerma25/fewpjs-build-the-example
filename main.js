// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likeHearts = document.getElementsByClassName('like-glyph')
let errorModal = document.getElementById("modal")

for (let heart of likeHearts) {
  heart.addEventListener("click", likeCallback)
}

function likeCallback(event) {
// When click empty heart
  let heart = event.target
  // invoke mimicServerCall to simulate making server req.
  mimicServerCall()
    // when successful 
    //change heart to full
    // add .activated-heart class
    .then(function() {
      if (heart.innerText === EMPTY_HEART) {
        heart.className = "activated-heart-class"
        heart.innerText = FULL_HEART
      }
      else {
        // when click a full heart
        //change back to empty
        //remove .activated-heart class
        heart.className = "like-glyph"
        heart.innerText = EMPTY_HEART
      }
    })
    .catch(function() {
    // when failure
    // resp. to error w/ catch(() => {}) after .then(() => {})
    // disp. error mod by removing .hidden class
    // disp. ser error msg in modal
    // use setTimeout, hide modal after 5sec, add .hidden class
    errorModal.classList.remove("hidden")
      setTimeout(function() {
        errorModal.className = "hidden"
      }, 5000)
    })

}




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
