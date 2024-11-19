console.log(this)
/* if i try to print 
this keyword in gloabl context (here it is Node.js )Node.js wraps my code in a module, 
which means my code is not running in the actual global context but in the context of that module.
that's why my output is '{}'  if i run the same code in a browser  the ouput will be window 
because this in global conext in browsers point to the window object.*/