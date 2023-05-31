function decimalToBinary(num) {
// write your code here
	let  res=[];
	while(num>0){
		
	  res= num%2;
	num=num/2;
	}
	Array.prototype.reverse(res);
	Array.prototype.join(res);
}

module.exports = decimalToBinary;
