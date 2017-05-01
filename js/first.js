// JavaScript Document
function first(){
	var $x=document.forms["myform-1"]["name-1"].value;
	if($x===null||$x===""){
		document.getElementById("demo").innerHTML="姓名不能为空";
		document.getElementById("demo").style.color="red";
		document.getElementById("change").style.borderColor="red";
    	return false;
	}
    else if($x.length>=4/* && $x.length<=16*/){
		document.getElementById("demo").innerHTML="名称格式正确";
		document.getElementById("demo").style.color="green";
		document.getElementById("change").style.borderColor="green";
		return false;
	}
	else {
		document.getElementById("demo").innerHTML="名称格式错误";
    	document.getElementById("demo").style.color="red";
		document.getElementById("change").style.borderColor="red";
    	return false;
	}
}