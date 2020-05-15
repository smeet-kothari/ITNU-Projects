function OPR()
{
	let n = document.getElementById("n").value;
	let c_s = document.getElementById('cache-size').value;

	window.alert("No, of Page requets is= "+String(n)+" and Max. Cache Size is "+String(c_s));

	var arr = [];
	for (var i =0 ;i < n ; i++)
	{
		var temp = prompt("Enter Number");
		arr.push(temp);
	}
	
	let cache=[];
	let pos = 0;
	for (let i=0;i<arr.length && cache.length<c_s;i++)
	{
		//window.alert("In "+String(j)+"ok");
		let flag = 0;
		for(let j=0;j<cache.length;j++)
		{
			//window.alert("In "+String(j)+"ok");
			if(cache[j] == arr[i])
			{
				window.alert("Page "+String(arr[i])+" is Hitted in cache");
				flag = 1;
				break;
			}
		}
		if(flag != 1)
		{
			cache[cache.length]=arr[i];
			window.alert("Page "+String(arr[i])+" is fault and inserted into cache");
		}
		pos = i;
	}

	for (let i=pos;i<arr.length;i++)
	{
		let f=0;
		for (let j=0;j<c_s;j++)
		{
			if(arr[i]==cache[j])
			{
				window.alert("Page "+String(arr[i])+" is Hitted in cache");
				f=1;
				break;
			}
		}
		if(f==0)
		{
			let vis=[];
			for (let j=i+1;j<arr.length && vis.length!=c_s-1;j++)
			{
				let flag=0;
				for (let k=0;k<c_s;k++)
				{
					if(cache[k]==arr[j])
					{
						for (let x=0;x<vis.length;x++)
						{
							if(vis[x]==arr[j])
							{
								flag=1;
								break;
							}
						}
						if(flag==0)
						{
							vis.push(arr[j]);
						}
					}
				}
			}
			for (let j=0;j<c_s;j++)
			{
				let found=0;
				for (let k=0;k<c_s-1 && k<vis.length;k++)
				{
					if(vis[k]==cache[j])
					{
						found=1;
						break;
					}
				}
				if(found==0)
				{
					window.alert("Page "+String(cache[j])+" is Removed from cache");
					cache[j]=arr[i];
					window.alert("Page "+String(cache[j])+" is inserted in cache");
					break;
				}
				else 
				{
					window.alert("Page "+String(cache[cache.length-1])+" is Removed from cache");
					cache[cache.length-1]=arr[i];
					window.alert("Page "+String(cache[j])+" is inserted in cache");
					break;
				}
			}
		}
	}
}