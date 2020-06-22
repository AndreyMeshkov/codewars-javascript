// Redacted!

// instructions https://www.codewars.com/kata/5b662d286d0db722bd000013/train/javascript

function redacted(doc1, doc2) {
	if (doc1.length != doc2.length)
		return false;
	for (let i = 0; i < doc1.length; i++)
		if (!(doc1[i] == doc2[i] || (doc1[i] == 'X' && doc2[i] != '\n')))
			return false;
	return true;
}

