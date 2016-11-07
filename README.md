# BootstrapDualList - The DualList easier to use in angular.

[![duallistGif.gif](https://s21.postimg.org/qk4uaqfw7/duallist_Gif.gif)](https://postimg.org/image/72a6usiyb/)

# How to use

##### Import to your project the dualListDirective.js and duallist.cs files then reference the files in your project
```
  <script src="your/path/to/directive/js/dualListDirective.js"></script>
  <link rel="stylesheet" href="your/path/to/directive/css/duallist.css">
```
##### In your controller use the code below

[![duallist.png](https://s11.postimg.org/p0kf02vo3/duallist.png)](https://postimg.org/image/pdbt69dxr/)

##### In your page use

```
  <dualmultiselect options="options"> </dualmultiselect>
```

### $scope.options
<ul>
<li><b>title</b> - Title that will be displayed in the directive.</li>
<li><b>helpMessage</b> - Sub title that will be displayed in the directive.</li>
<li><b>orderProperty</b> - Order of the items will appear in the duallist.</li>
<li><b>items</b> - Items that appear in duallist.</li>
<li><b>categories</b> - Items that will appear in select that it be used to filter the duallist.</li>
<li><b>selectedItems</b> - Items that were selected by the user.</li>
</ul>

#### Used versions

##### Bootstrap 
"version": "3.3.7"

##### Angular
version": "1.5.8 

###### License

It is available under the MIT license.
[License](https://opensource.org/licenses/mit-license.php)

Copyright (c) 2015 Celso Wo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
