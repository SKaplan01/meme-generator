window.addEventListener('load', function() {
  var submitButton = document.getElementById('submit');
  var container = document.getElementById('container');

  submitButton.addEventListener('click', function() {
    var imageUrl = document.getElementById('image').value;
    if (imageUrl === '') {
      alert('Please enter the URL for an image');
    } else {
      var newMeme = document.createElement('div');
      newMeme.classList.add('meme-container');
      container.appendChild(newMeme);
      var removeButton = document.createElement('button');
      removeButton.classList.add('remove');
      removeButton.innerText = 'X';
      newMeme.appendChild(removeButton);
      var newImage = document.createElement('img');
      newImage.src = imageUrl;
      newMeme.appendChild(newImage);
      var topText = document.createElement('div');
      topText.innerText = document.getElementById('top-text').value;
      topText.classList.add('top');
      newMeme.appendChild(topText);
      var bottomText = document.createElement('div');
      bottomText.innerText = document.getElementById('bottom-text').value;
      bottomText.classList.add('bottom');
      newMeme.appendChild(bottomText);

      var memes = document.getElementsByClassName('meme-container');
      for (var i = 0; i < memes.length; i++) {
        memes[i].addEventListener('mouseover', function(event) {
          var thisMeme;
          if (event.target.classList.value === 'meme-container') {
            thisMeme = event.target;
          } else {
            thisMeme = event.target.parentElement;
          }
          thisMeme.children[0].style.display = 'block';
        });
        memes[i].addEventListener('mouseleave', function(event) {
          var thisMeme;
          if (event.target.classList.value === 'meme-container') {
            thisMeme = event.target;
          } else {
            thisMeme = event.target.parentElement;
          }
          thisMeme.children[0].style.display = 'none';
        });
        memes[i].addEventListener('click', function(event) {
          var thisMeme;
          if (event.target.classList.value === 'meme-container') {
            thisMeme = event.target;
          } else {
            thisMeme = event.target.parentElement;
          }
          container.removeChild(thisMeme);
        });
      }

      this.form.reset();
    }
  });
});
