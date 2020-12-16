'use strict';

function getDogImage() {

  let input_value = document.getElementById('breed').value;
  fetch(`https://dog.ceo/api/breed/${input_value}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Breed not found'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  if(responseJson.status === 'error') {
    alert('Breed not found');
  }
  else {
    //replace the existing image with the new one
    $('.results-img').replaceWith(
    // //display the results section
      `<img src="${responseJson.message}" class="results-img">`
    )
    $('.results').removeClass('hidden');
  }

}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});