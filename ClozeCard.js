exports.ClozeCard = function(q, cloze) {
	var textToLower = q.toLowerCase();
	var clozeToLower = cloze.toLowerCase();
		if (!textToLower.includes(clozeToLower)) {
		console.log("please try again");
		return;
		}

	this.full = q;
	this.cloze = cloze;
	this.partial = q.replace(cloze, '...');
}

