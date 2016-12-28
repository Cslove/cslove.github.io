(function(){
        var $li=$(".txt-box li"),
            $span=$(".txt-box span"),
            $pic=$(".pic-box"),
            $submit=$(".submit"),
            $C_font=$(".blog-list i"),
            $article=$(".blog-list li"),
            $resume=$(".resume");
            // 鼠标滑过三角效果
        $li.each(function(i) {
        	$(this).hover(function() {
        		$span[i].setAttribute("Class","trangle")
        	}, function() {
        		$span[i].removeAttribute("Class")
        	});
        });
        //搜索跳转
        $submit.click(function(event) {
                var keywords=$(".searching").val();
                var url="https://www.baidu.com/s?f=8&rsv_bp=1&rsv_idx=1&word="+keywords;
                var URL=encodeURI(url);
                window.open(URL);
        });
        $article.each(function(i) {
                $(this).hover(function() {
                        $article[i].style.color="#12919c";
                }, function() {
                        $article[i].style.color="#000";
                });
        });
        //跳转简历页
        $resume.click(function(event) {
                var resumeName=prompt("请输入我的姓名：");
                if (resumeName==="陈胜") {
                        window.open("resume.html")
                }else if(resumeName===null){
                        alert("请输入本人姓名：");
                }else{
                alert("对不起··· 你没有权限查看简历！")

                }
        });
        
})();