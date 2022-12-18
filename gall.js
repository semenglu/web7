$(document).ready(function(){
	$('.slider').slick({
		prevArrow:"<img class='a-left control-c prev slick-prev' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QBPWDm7gKJl-mUlnqNWmHZ5sTo-BW2v2h_-IBopzWIuvfJAXaPUfAGxnYvvFhliCs8c&usqp=CAU'>",
nextArrow:"<img class='a-right control-c next slick-next' src='https://w7.pngwing.com/pngs/178/393/png-transparent-computer-icons-arrow-right-arrow-angle-text-triangle.png'>",
    dots: true,
		arrows:true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 4,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2
			}
		  }
		]
	  });
});
