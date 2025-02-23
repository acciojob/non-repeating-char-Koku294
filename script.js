function firstNonRepeatedChar(str) {
 // Write your code here
	let n = str.length;
	for(let i=0;i<n;i++){
		if(s.indexOf(s[i])) === s.lastIndexOf(s[i]){
			return s[i];
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
