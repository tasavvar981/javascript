let array1 = [7, 2, 6, 5, 4, 8];
let array2 = [3, 3, 5, 6, 8,9];

let mergedArray = array1.concat(array2);
let unique=[];
mergedArray.forEach((element) => {
      if(!unique.includes(element))
      {
        unique.push(element);
      }
});
console.log(unique);


/*
let duplicateArray = mergedArray.filter((ele, index) =>
     mergedArray.indexOf(ele) === index
    );
console.log(duplicateArray); // without sorting */
//let unique=[];

//mergedArray.sort((a,b)=>a-b);
//for(let i=0;i<=mergedArray.length;i++)
//{
   //  if(mergedArray[i]==mergedArray[i-1])
   //  {
     //    continue;
     //}
     //else
     //{
     //      unique.push(mergedArray[i]);
    // }
//}
 //console.log(unique);


