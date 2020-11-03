function dobav(chislo) 
{
    var chislo = document.getElementById("chislo").value;
	var resultat = chislo+" было введено.";
	document.getElementById("resultat").innerHTML = resultat;
}
function check() {
        	var check_text = document.getElementById("check_text");
          let name = document.getElementById('name').value
          document.getElementById('profile_name').textContent = name

          let sex = document.getElementById('sex').value
          document.getElementById('profile_sex').textContent = sex

          let age = document.getElementById('age').value
          document.getElementById('profile_age').textContent = age
        }
function calcSum(a, b)
{
	var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var result = a + b;
	document.getElementById("result").innerHTML = result;
}
function massiv(v,h,n,m,j)
{
	var v = (document.getElementById("v").value);
	var h = (document.getElementById("h").value);
	var n = (document.getElementById("n").value);
	var m = (document.getElementById("m").value);
	var j = (document.getElementById("j").value);
	var arr=[v,h,n,m,j];
	for (var i= 0; i < arr.length; i++) {
		if(Number(arr[i])){
			arr[i]=arr[i]*arr[i];
			
		}   
		else{
			arr[i]="0";
		} 
		
	}
	alert (arr);
}
function changeColor(colorValue) {
    document.body.style.background =     document.getElementById(colorValue).dataset.color;
}


