function decimalToBinary(num) {
// write your code here
	while(num>0){
		let  res=[];
	  res= num%2;
	num=num/2;
	}
	Array.prototype.reverse(res);
}

module.exports = decimalToBinary;
