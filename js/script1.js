

function calcD(a, b, c)
{
	var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
	var c = Number(document.getElementById("c").value);
    var result = b*b - 4*a*c;
	document.getElementById("result").innerHTML = result;
}
function Min(e, d)
{
	var e = Number(document.getElementById("e").value);
    var d = Number(document.getElementById("d").value);
	if (e<d) {
		e = e;	
		
	}
	else {
		e = d;
	}
	var result1 = e;
	document.getElementById("result1").innerHTML = result1;
}
function vozrast() 
{
		var age = prompt('Сколько вам лет?','Введите сюда ваш возраст');
		if (!confirm('Вы уверены, что вам ' + age + ' лет?'))
		{
		vozrast()
		}
}

