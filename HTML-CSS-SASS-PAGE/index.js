$(document).ready(function() {
	
	let i = null;
	
	$("#clicke").on("click", function() {
	
		i++;

        console.log(i)


        if(i==5) {
            location.href = 'easteregg.html';
        }
	});
	

    $("#clickeSH").on("click", function() {
	
		i++;

        console.log(i)


        if(i==5) {
            location.href = '../pac.html';
        }
	});
	
})