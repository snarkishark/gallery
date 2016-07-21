/*a gallery*/
var images = [];
var thumbs = [];
//deal with big images
$(".clump").each(function(i){
	$(this).hide()
           . data("index",i);
	images[i]=$(this);
	
	
});

//deal with thumbs
$("#nav img").each(function(j){
	$(this).addClass("inactive")//so they don't hover yet
		   .data("index", j)//give them their data index to match big image
		   .hover(function(){
			 $(this).toggleClass("active inactive")
		   })
		   .click(function(){
			   displayImage($(this).data("index"));
		   });
	thumbs[j]=$(this);
});
console.log("length: " +images.length);
$("#skip img").click(function(){
	var visible = $(".clump:visible").data("index");
	var next = visible + 1;
	var previous = visible - 1;
	console.log("visible inside click function " + visible);
	if($(this).hasClass("forward")){
		if (next < images.length ){
			displayImage(next);
			
		}else{
			//do nothing
		}
	}else if (visible > 0){
			
			displayImage(previous);
	}else{
			//do nothing
			
	}
	
	
});



function displayImage(index){
	
	$(".clump").hide();
	images[index].show();
	$("#nav img").removeClass("current");
	thumbs[index].addClass("current");

	
	
	$("#skip").show().contents().removeClass("end");	
	if (index == 0){
		$(".back").addClass("end");		
	}else if (index == (images.length-1)){
		$(".forward").addClass("end");
	}
	
	
}

