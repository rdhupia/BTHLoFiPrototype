$(document).ready(function() {
	$('.users').draggable({ containment: 'document', revert: true, helper: 'clone', 
	start: function() {
		contents = $(this).text();
	}
	}); 
	
	$('.usersAssigned1').droppable({ hoverClass: 'border', accept: '.users',
	drop: function() {
		$('.usersAssigned1').append(contents + '<br />');
	}
	});
	
	$('.usersAssigned2').droppable({ hoverClass: 'border', accept: '.users',
	drop: function() {
		$('.usersAssigned2').append(contents + '<br />');
	}
	});
	
	$('.usersAssigned3').droppable({ hoverClass: 'border', accept: '.users',
	drop: function() {
		$('.usersAssigned3').append(contents + '<br />');
	}
	});
	
	$('.usersAssigned4').droppable({ hoverClass: 'border', accept: '.users',
	drop: function() {
		$('.usersAssigned4').append(contents + '<br />');
	}
	});
	
	$('.usersAssigned5').droppable({ hoverClass: 'border', accept: '.users',
	drop: function() {
		$('.usersAssigned5').append(contents + '<br />');
	}
	});
	
	$('.usersAssigned6').droppable({ hoverClass: 'border', accept: '.users',
	drop: function() {
		$('.usersAssigned6').append(contents + '<br />');
	}
	});
	
	
	
});