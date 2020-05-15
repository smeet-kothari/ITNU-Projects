function LFU()
{
	let n = document.getElementById("n").value;
	let c_s = document.getElementById('cache-size').value;

	window.alert("No, of Page requets is= "+String(n)+" and Max. Cache Size is "+String(c_s));

	var arr = [],max=-1;
	for (var i =0 ;i < n ; i++)
	{
		var temp = prompt("Enter Number");
		arr.push(temp);
		if(temp>max) max=temp;
	}
	window.alert("Page Requets are "+arr);

	let freq=[];
	for (let i=0;i<=max;i++)
	{
		freq.push(0);
	}
	
	let cache=[];

	//Queue Implementation
	function Queue() {
   		this.elements = [];
	}
	Queue.prototype.enqueue = function (e) {
   		this.elements.push(e);
	};
	Queue.prototype.dequeue = function () {
    	return this.elements.shift();
	};
	Queue.prototype.isEmpty = function () {
    	return this.elements.length == 0;
	};
	Queue.prototype.peek = function (index) {
    	return !this.isEmpty() ? this.elements[index] : undefined;
	};
	Queue.prototype.length = function() {
    	return this.elements.length;
	}
	Queue.prototype.change = function(index) {
		this.elements[index]=-1;
	}
	let q = new Queue();

	let a=0;
	for (a;a<arr.length && cache.length!=c_s;a++)
	{
		let flag=1;
		for (let i=0;i<q.length();i++)
		{
			if(q.peek(i) == arr[a])
			{
				window.alert("Page "+String(arr[a])+" is Hitted in cache");
				freq[arr[a]]+=1;
				flag = 0;
				break;
			}
		}
		if ( flag == 1)
		{
			cache.push(arr[a]);
			freq[arr[a]]+=1;
			q.enqueue(arr[a]);
			window.alert("Page fault Occurs and "+String(arr[a])+" inserted into cache");
		}
	}

	for (let i=a;i<arr.length;i++)
	{
		let flag=1;
		for (let j=0;j<cache.length;j++)
		{
			if(cache[j]==arr[i])
			{
				window.alert("Page "+String(arr[i])+" is Hitted in cache");
				freq[arr[a]]+=1;
				flag = 0;
				break;
			}
		}
		if (flag == 1)
		{
			min=arr.length+1;
			let index=0;
			for (let j=q.length()-1;j>=0;j--)
			{
				if( q[j]==-1 || q.peek(j) == -1 ) continue;
				if(freq[q.peek(j)]<=min) 
				{
					min = freq[q.peek(j)];
					index=j;
				}
			}
			for (let j=0;j<cache.length;j++)
			{
				if(cache[j] == q.peek(index))
				{
					cache[j]=arr[i];
					break;
				}
			}
			//window.alert(freq);
			/*window.alert(index);
			window.alert(q.peek(index));*/
			window.alert("Page "+String(q.peek(index))+" is removed from cache");
			freq[q.peek(index)]=0;
			q.change(index);
			q.enqueue(arr[i]);
			freq[arr[i]]=1;
			window.alert("Page fault Occurs and "+String(arr[i])+" inserted into cache");
		}
	}
}