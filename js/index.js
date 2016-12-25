(function(){
        var $li=$(".txt-box li"),
            $span=$(".txt-box span"),
            $pic=$(".pic-box"),
            $submit=$(".submit");
            // 鼠标滑过三角效果
        $li.each(function(i) {
        	$(this).hover(function() {
        		$span[i].setAttribute("Class","trangle")
        	}, function() {
        		$span[i].removeAttribute("Class")
        	});
        });
        $submit.click(function(event) {
                var keywords=$(".searching").val();
                var url="https://www.baidu.com/s?f=8&rsv_bp=1&rsv_idx=1&word="+keywords;
                var URL=encodeURI(url);
                window.open(URL);
        });

})();