# ExcaliburDualList - The DualList easier to use in angular.

[![duallistGif.gif](https://s21.postimg.org/qk4uaqfw7/duallist_Gif.gif)](https://postimg.org/image/72a6usiyb/)

# How to install
```JavaScript
 bower install excalibur-duallist
```

# How to use

##### Import to your project the dualListDirective.js and duallist.cs files in bower_components folder
```JavaScript
  <script src="bower_components/bootduallist/dist/js/dualListDirective.js"></script>
  <link rel="stylesheet" href="bower_components/bootduallist/dist/css/duallist.css">
```
Then refer to your module
```JavaScript
  var app = angular.module('app', ['dualmultiselect']);
```

##### In your controller use the code below

```JavaScript
$scope.options = {
    title: 'Demo: your title',
    helpMessage: 'Demo: your help message',
    orderProperty: '[name, category]',
    items: [
              {'category': 'FF9', 'name': 'Zidane'},
              {'category': 'FF9', 'name': 'Garnet'},
              {'category': 'FF9', 'name': 'Vivi'},

              {'category': 'FF8', 'name': 'Squall Leonhart'},
              {'category': 'FF8', 'name': 'Quistis Trepe'},
              {'category': 'FF8', 'name': 'Zell Dincht'},

              {'category': 'FF7', 'name': 'Cloud Strife'},
              {'category': 'FF7', 'name': 'Aerith Gainsborough'},
              {'category': 'FF7', 'name': 'Vincent Valentine'},

           ],
    categories: [
                  {'name': 'FF9'},
                  {'name': 'FF8'},
                  {'name': 'FF7'}
                ],
    selectedItems: []
  };
});
```

##### In your page use

```Html
  	<excalibur-dual-list options="options"> </excalibur-dual-list>
```

### $scope.options
<ul>
<li><b>title</b> - Title that will be displayed in the directive.</li>
<li><b>helpMessage</b> - Sub title that will be displayed in the directive.</li>
<li><b>orderProperty</b> - Order of the items will appear in the duallist.</li>
<li><b>items</b> - Item that will appear on the no dual list.</li>
<li><b>categories</b> - Items that will appear in select that it be used to filter the duallist.</li>
<li><b>selectedItems</b> - Items that were selected by the user.</li>
</ul>

#### Used versions

##### Bootstrap 
"version": "3.3.7"

##### Angular
version": "1.2.32 
<hr>

### License

It is available under the MIT license.
[License](https://opensource.org/licenses/mit-license.php)
