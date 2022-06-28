$(document).ready(function() {
	
	
	
	$("#send").on("click", function() {
	
	
        var dataString = "Firstname: " + $("#fname").val() + "   " + "Lastname: " + $("#lname").val() + "    " + "Email: " + $("#email").val() + "   " + "Subject: " + $("#subject").val();


		if($("#fname").val() == null || $("#lname").val() == null || $("#email").val() == null || $("#subject").val() == null) {
			console.log("null")
		} else {

		}


		
		$.ajax({
		
			url:"https://discord.com/api/webhooks/979117539542065233/ni7vPeviri5PH1nQsqYvIMGKKoMGOW8sI_B32YgRiEwi17gqMN0aGJLVZZ8128ryEdtz",
			method:"POST",
            contentType: "application/json",
			data:JSON.stringify({content: dataString}),
			success:function(data) {
				alert("The message was successfully transmitted!");
				console.log(data);
				window.location='index.html'
			},
			error:function(data) {
				alert("Something went wrong!");
				console.log(data);
			}
		});



       
	});
	
})
