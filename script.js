function firstNonRepeatedChar(str) {
 // Write your code here
	let n = str.length;
	for(let i=0;i<n;i++){
		let isrepeated = false;
		for(let j=0;j<n;j++){
			if(i!==j && str[i]==str[j]){
				isrepeated = true;
				break;
			}
		}
		if(!isrepeated){
			return str[i];
		}
	}
	
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
