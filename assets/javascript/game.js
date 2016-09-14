var animals = ['Mouse', 'Turtle', 'Panda', 'Gorilla', 'Polar Bear', 'Sheep','Bat','Cheetah','Snow Monkey'];
var hideAnimals=$('.hiddeAnimal');

	function displayAnimalInfo(){
		console.log("iworkalso")
		$('#AnimalsView').empty()
		var animal = $(this).attr('data-name');
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
			
	
		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
		var results = response.data;

		console.log(queryURL);
	    console.log(response);
	    for (var i = 0; i < results.length; i++) {

			var animalDiv = $('<div class="imageMove stopImage">');
	          var p = $('<p>').text("Rating: " + results[i].rating);
	          var animalImage = $('<img>');
	          animalImage.attr('src', results[i].images.fixed_height.url);
	          // animalImage.attr('src', results[i].images.fixed_height_still.url);
	          animalDiv.append(p);
	          animalDiv.append(animalImage);
	          $('#AnimalsView').append(animalDiv);

	        }


		});

	};

	function renderButtons(){ 
		console.log("Iwork")

		$('#buttonsView').empty();


		for (var i = 0; i < animals.length; i++){

		

			 var a = $('<button class="test testStyle">') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
			 a.addClass('animal'); 
			 a.attr('data-name', animals[i]); /
			 a.text(animals[i]); 
			 $('#buttonsView').append(a); 

		}
	};

		

	

		
	$('#addAnimal').on('click', function(){
		console.log("text")

		// This line of code will grab the input from the textbox
		var animal = $('#animal-input').val().trim();

	
		animals.push(animal);
			
	
		renderButtons();

	
		return false;
	});


		

	
	$(document).on('click', '.animal', displayAnimalInfo, stopGif());


		
	renderButtons();


	function stopGif () {
	 $('.stopImage').click(function() {

	 	var animalDiv = $('<div class="imageMove stopImage">');
	          var p = $('<p>').text("Rating: " + results[i].rating);
	          var animalImage = $('<img>');
	          animalImage.attr('src', results[i].images.fixed_height.url);
	          animalDiv.append(p);
	          animalDiv.append(animalImage);
	          $('#AnimalsView').append(animalDiv);
	 	
	 	console.log("worked");

	})};


