/**
 * Created by 汪怀宇 on 2018/6/21.
 */
//鼠标移入显示两个按钮
$(function () {
    $("#sc-box").mouseover(function () {
        $(".pre,.next").show();
    }).mouseout(function () {
        $(".pre,.next").hide();
    });
    //上一个按钮的单击事件
    $(".pre").click(function () {
        $(this).index();
        var index=$(".imgs img").index($(".imgs img:visible"));
        if(--index<0){
            index=5;
        }
        //不为0说明有上一个
        var $now=$(".imgs img").eq(index);
        $now.show();//让切换后的元素显示
        $now.siblings().hide();//让其他元素隐藏
        //圆点
        $(".btns li").eq(index).addClass("current")
            .siblings().removeClass("current");
    });




    //下一个事件
    $(".next").click(function () {
        var index=$(".imgs img").index($(".imgs img:visible"));
        if(++index>5){
            index=0;
        }
        //不为0说明有上一个
        var $now=$(".imgs img").eq(index);
        $now.show();//让切换后的元素显示
        $now.siblings().hide();//让其他元素隐藏
        $(".btns li").eq(index).addClass("current")
            .siblings().removeClass("current");
    });
    setInterval(function () {
        var index=$(".imgs img").index($(".imgs img:visible"));
        if(++index>5){
            index=0;
        }
        //不为0说明有上一个
        var $now=$(".imgs img").eq(index);
        $now.show();//让切换后的元素显示
        $now.siblings().hide();//让其他元素隐藏
        $(".btns li").eq(index).addClass("current")
            .siblings().removeClass("current");
    },3000)
});


