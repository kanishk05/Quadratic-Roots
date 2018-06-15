function cal(){
	var a;
	var b;
	var c;
	var d;
	var x1;
	var x2;
	a = document.querySelector("#n1").value;
	b = document.querySelector("#n2").value;
	c = document.querySelector("#n3").value;
	d = b*b-(4*a*c);
	if(d<0)
		alert("No Real Roots");
	else if(d>0)
	{
		alert("Real and Distinct Roots");
		x1 =(-b+sqrt(d))/(2*a);
		x2 =(-b-sqrt(d))/(2*a);
		alert(x1);
		alert(x2);
	}
	else if(d==0)
	{
		alert("Roots are Real and Equal");
		x1 = -b/(2*a);
		x2 = x1;
		alert(x1);
		alert(x2);
	}
}