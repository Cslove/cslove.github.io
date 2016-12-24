(function(){
	var $li=$(".txt-box li"),
	    $span=$(".txt-box span"),
	    $pic=$(".pic-box");

        $li.each(function(i) {
        	$(this).hover(function() {
        		$span[i].setAttribute("Class","trangle")
        	}, function() {
        		$span[i].removeAttribute("Class")
        	});
        	// 点击li切换图片	
        	// $(this).on('click', function(event) {
        	// 	event.preventDefault();
        		
        	// 	$pic.css('bacgroundColor', 'red');
        	// });
        });
    
})();