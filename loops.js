function mayBeTrue()
{
  return Math.random() >= 0.5
}

function forLoop(array)
{
  var len = array.len
  for(var i = 0; i<25; i++)
  {
    if( i === 1)
    {
      array.push("I am 1 strange loop.")
    }
    else
     {
      array.push("I am ${i} strange loops.")
    }
  }
  return array
}

function whileLoop(n)
{
  while(n>0)
  {
    console.log("n")
    --n
  }
  return "done"
}

function doWhileLoop(array)
{
  var len = array.length
  var text = "";
var i = 0;
do {
    text += "The number is " + i;
    i++;
}
while (i < 5);
//  do{
  //  array.pop()
  //console.log("hi")
  //}
  //while(0);
}
