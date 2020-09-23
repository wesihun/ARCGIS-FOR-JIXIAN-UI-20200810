var zhanghu1;
var str;
var str_child;
var str_parent;
var nameone;
var area;
var option;
var json;
var nameche;
var count;
$(document).ready(function(){
    dengluLocation();
    huoquName();
    $("#inf-namenow-time").html(newTime());
    tiaozhuan();
    tuichudenglu();
    $("#login").click(function(){
        PDclick();
      });
      $("#time1").html(newTime());
      
      $.ajax({
        url:config.ip + config.port + '/getAnalysisMenue',
        type: 'POST',
        async: false,
        xhrFields:{withCredentials:true},
        success:function(data){
               //形成树菜单
              //删除数组最后一个元素
              console.log(data)
               data.pop()
               treetjfx(data,".qtwo");
               $("#browser").treeview();
                //滑块移动事件
               huakuaiMove(".folder");
                //点击变色事件
               caidanChangeColor(".file");
                //点击查询
               queryCdtj(".fthree",".sthree","#browser",data);
        }
    });
    $.ajax({
      url:config.ip + config.port + '/getAllDLTBServiceVersion?type=1',
      type: 'POST',
      async: false,
      // xhrFields:{withCredentials:true},
      success:function(data){
        
      //   TB_DLTBPHYSICS.fuPojo = data[data.length-1]
        // console.log(TB_DLTBPHYSICS.fuPojo)
        var lastValue = data[data.length-1].updatetime.slice(0,11)
        $(".time-text").html(lastValue);
        $(".time-text").click(function(){
    
          var display = $(".cc2").css("display");
          if(display == "none"){
            $(".cc2").children().remove();
            var data1=[{id: 0, serviceaddr: null, databasename: null, tablename: null, type: 0,updatetime: "2020-09-09 00:00:00"},
            {id: 0, serviceaddr: null, databasename: null, tablename: null, type: 0,updatetime: "2020-11-09 00:00:00"}
              ]
            data.forEach(e => {
              a = e.updatetime.slice(0,11)
              $(".cc2").append(`<ul><li class="${a}" type="${a}" style="padding:5px" id="sendtimeid"><img src="./img/timeicon.png"/>&nbsp;${a}</li></ul>`);
              var timeObj = e
              clicktime_2(a,timeObj)
            })
       
    
            // document.getElementsByClassName("#jxx2").innerHTML = arr
            // console.log(document.getElementsByClassName(".filetree treeview-famfamfam cc2").innerHTML = arr)
            // bianlitime(data,"#jxx2");
            // $(".cc2").treeview();
            // caidanChangeColor(".cd,.cd1");
            // $(".cd1, .cd").click(function(){
            // var name = $(this).html();
            // var id = JSON.parse($(this).attr("menueid"));
            // right = id;
            // $(".xz").html("&nbsp;" + name);
            // if($(this).attr("class") == "file cd"){
            //    $(".cc2").css("display","none");
            // };
    
              //左侧树，行政区导航
    
    
            // });
            $(".cc2").css("display","inline-block");
            }else{
            $(".cc2").css("display","none");
           };
         });
      }
    })
    var clicktime_2 = (className,timeObj)=>{
      $('.'+className).click(function(){
          // TB_DLTBPHYSICS.fuPojo = timeObj
          // console.log(timeObj)
          $('.'+className).css("color","blue");
          var value1 = document.getElementsByClassName("time-text");//获取值
          value1[0].innerHTML=className
          $(".cc2").css("display","none");
  
          // new ChangeVersionClass().getCurrentDynamycLayerByFutureLayer();
  
      });
  };
    //地区信息
    $.ajax({
      url:config.ip + config.port + '/getAdministration',
      type: 'POST',
      async: false,
      xhrFields:{withCredentials:true},
      success:function(data){
        $(".xz").click(function(){
          var display = $(".cc1").css("display");
          if(display == "none"){
            $(".cc1").children().remove();
            $(".cc1").append(`<ul><li class="closed" id="jxx2"><span class="folder cd1" id="jxx1" menueid='{"id":0, "subAdministrations":null, "name": "集贤县", "parentId": 0, "treeCode": "000000"}'>集贤县</span></li></ul>`);
            bianliDF(data,"#jxx2");
            $(".cc1").treeview();
            caidanChangeColor(".cd,.cd1");
            $(".cd1, .cd").click(function(){
            var name = $(this).html();
            var id = JSON.parse($(this).attr("menueid"));
            $(".xz").html("&nbsp;" + name);
            if($(this).attr("class") == "file cd"){
               $(".cc1").css("display","none");
            };
            });
            $(".cc1").css("display","inline-block");
            }else{
            $(".cc1").css("display","none");
           };
         });
         $(function gbright(){
          $(".xz,.cc1").click(function(event){
              event.stopPropagation();
          });
          $(document).click(function(){
              $(".cc1").css("display","none");
          });
      });
      }
  });
  clitree();
//导出数据
$('#dcsj').on('click',function(){
  location.href = config.newip+config.newport+'/arcgis/Other/Export?jsontree='+json+'&exclename='+nameche;
});  
});