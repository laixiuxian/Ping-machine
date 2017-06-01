window.onload=function(){
	var oFo=document.getElementsByTagName('footer');
	var aLi=oFo.getElementsByTagName('li');
	for(var i=0;i<aLi.length;i++){
		aLi[i].style.backgroundImage="url(../images/"+picName+".png) no-repeat center 0.2rem";
		aLi[i].style.backgroundSize="0.35rem 0.35rem";
	}
}
