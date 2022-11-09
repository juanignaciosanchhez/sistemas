// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function sistemas() {
	var tipo, total;
	var precio = new Number();
	var cantidad = new Number();
	var producto = new String();
	var provedor = new String();
	var i = new Number();
	var f = new Number();
	var n = new Number();
	document.write("digite el producto",'<BR/>');
	producto = prompt();
	document.write("tipo de producto",'<BR/>');
	tipo = prompt();
	document.write("digite precio",'<BR/>');
	precio = Number(prompt());
	document.write("cantidad",'<BR/>');
	cantidad = Number(prompt());
	total = (precio*cantidad);
	document.write("provedor?",'<BR/>');
	n = Number(prompt());
	var provedor = new Array(5);
	for (i=1;i<=n;i++) {
		provedor[0] = "";
	}
	document.write("el costo total de la compra es: ",total,'<BR/>');
}

