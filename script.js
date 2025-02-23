function firstNonRepeatedChar(str) {
 // Write your code here
	let n = str.length;
	for(let i=0;i<n;i++){
		let isrepeated = false;
		for(let j=0;j<n;j++){
			if(i!==j && s[i]==s[j]){
				isrepeated = true;
				break;
			}
		}
		if(!isrepeated){
			return s[i];
		}
	}
	
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
