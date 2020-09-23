var TB_DLTBPHYSICS = {dyPojo:null, fuPojo:null};//当前选中的地类图斑对象，对应mysql tb_dltb

function ChangeVersionClass()//选择版本类
{
    this.changeLayer = changeLayer;//切换图层
    this.getCurrentDynamycLayerByFutureLayer = getCurrentDynamycLayerByFutureLayer;//根据全局变量TB_DLTBPHYSICS中的要素服务时间取得对应的动态地图服务
}



function changeLayer(){

}

function getCurrentDynamycLayerByFutureLayer() {
    console.log(TB_DLTBPHYSICS.fuPojo)
}