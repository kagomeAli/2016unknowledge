/**
 * Created by yanqin on 2016/12/22.
 */

//求连续子数组的最大和
function sumAll(arr){
    var sum=0,dm=0;
    for(var x in arr){
        if(arr[x]<0){
            if(sum>=dm)
            dm=sum;
            sum=-arr[x];
        }
        sum+=arr[x];
        if(x==arr.length-1){
            if(sum>=dm)
                dm=sum;
        }
    }
    console.log(dm);
}
var array=[1,2,3,4,5,6,7,8,-1,3,4,54,23];
sumAll(array);