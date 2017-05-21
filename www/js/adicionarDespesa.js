function showVencimento() {
	var vencBox = document.getElementById('desp-vencimento-area');
	vencBox = vencBox.getElementsByTagName('input')[0];
	var dateVenc = document.getElementById('desp-diasvencimento-area');
	if (vencBox.type == "checkbox") {
		var checkValue = vencBox.checked;
		if (checkValue) {
			dateVenc.classList.remove('hide');
		} else {
			dateVenc.classList.add('hide');
		}
	} else {
		//quit
	}
}