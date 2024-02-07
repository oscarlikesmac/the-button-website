let clickCount = 0;

function incrementCounter() {
  clickCount++;
  document.getElementById('counter').innerText = clickCount;

  if (clickCount === 10) {
    displayMessage(); 
  }
  

if (clickCount === 12) {
	clickCount = 22;
	
	
	
	
}
	
	
}



    


function displayMessage() {
  const messageElement = document.createElement('p');
  messageElement.innerText = "Congratulations! GAYBOY!";
  messageElement.classList.add('congratulations-message');




  const buttonContainer = document.body;
  buttonContainer.insertBefore(messageElement, document.querySelector('.simple-button'));
}
