var x = [8, 3, -5, 10, 32];
function removeLast() {
  if (Array.isArray(x)){
    x.pop();
   console.log(x);
   } else {
     return false;
   }
}
removeLast(x);