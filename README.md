# broccoli-ugily-unreachable

Reproducing what seems to be a bug where unreachable code is not removed.

```JavaScript
function wrapper(_exports) {
  _exports.myFunction = myFunction;

  function myFunction() {
    if (!false) {
      return;
    }

    if (true) {
      return;
    }

    return;
    var num = 1;
    return num;
  }
}
```

Compiles down to this:
```JavaScript
function blah(n){n.myFunction=function(){return void 0;return void 0;return}}
```

If you get rid of the `wrapper` function or if you don't assign `myFunction`, the unreachable code is removed.