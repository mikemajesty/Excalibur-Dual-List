# Excalibur Dual List - The Bootstrap Dual List easier to use in angular [![rsz_sowrd.png](https://s27.postimg.org/eotggzioj/rsz_sowrd.png)](https://postimg.org/image/om4ha1qa7/)

[![excalibur.gif](https://s28.postimg.org/byvkcvvwd/excalibur.gif)](https://postimg.org/image/l6nstl2yh/)


## Try it yourself.
[click here](https://excalibur-dual-list.herokuapp.com/)

# How to install
```JavaScript
 bower install excalibur-duallist --save
```

# How to use

##### Import to your project the dualListDirective.js and duallist.cs files in bower_components folder
```JavaScript
  <script type="text/javascript" src="/bower_components/excalibur-duallist/dist/js/excalibur-duallist.min.js"></script>
  <link rel="stylesheet" href="/bower_components/excalibur-duallist/dist/css/excalibur-duallist.min.css">
```
Then refer to your module
```JavaScript
  var app = angular.module('app', ['excaliburDualList']);
```

##### In your controller use the code below

```JavaScript
$scope.myModel = {selectItem: {}};

$scope.options = {
  title: {label: 'Demo: your title', helpMessage: 'Demo: your help message'},
  selectOptions: {initialText: "ALL", isDisable: false, uppercase: true},
  selectHeight: 'md',
  items: [
    { 'category': 'FF8', 'name': 'Squall Leonhart' },
    { 'category': 'FF8', 'name': 'Quistis Trepe' },
    { 'category': 'FF8', 'name': 'Zell Dincht' },

    { 'category': 'FF9', 'name': 'Zidane' },
    { 'category': 'FF9', 'name': 'Garnet' },
    { 'category': 'FF9', 'name': 'Vivi' },

    { 'category': 'FF7', 'name': 'Cloud Strife' },
    { 'category': 'FF7', 'name': 'Aerith Gainsborough' },
    { 'category': 'FF7', 'name': 'Vincent Valentine' },

  ],
  itemsOrderProperty: '[category, name]',
  categories: ["FF7", "FF8", "FF9"],
  button: {leftText: "Move All" , rightText: "Move All"},
  selectedItems: []
};

```

##### In your page use

```Html
  <excalibur-dual-list ng-model='myModel.selectItem' options="options"> </excalibur-dual-list>
```


### $scope.options

* **title:**(optional): Title that will be displayed in the directive input text.;
* **title: {label}**(optional): Label in input text.;
* **title: {helpMessage}**(optional): Sub label in input text.;
* **selectOptions:**(optional): Information about the input select.;
* **selectOptions: {initialText}**(optional): First text that will displayed in first select input element.;
* **selectOptions: {isDisable}**(optional): Indicates if the first select text is disabled.;
* **selectOptions: {uppercase}**(optional): Indicates if the all text options in select input is uppercase.;
* **selectHeight:**(required): Indicates the size of the item box. [{'xs': 150px}, {'sm': 225px}, {'md': 300px}, , {'lg': 450px}];
* **items:**(required): Item that will appear on the no dual list.;
* **itemsOrderProperty:**(optional): Order of the items will appear in the duallist.;
* **categories:**(required): Items that will appear in select that it be used to filter the duallist.;
* **button:**(required): Information about the input button that is used to move all elements.;
* **button: {leftText}**(required): Button left text;
* **button: {rightText}**(required): Button right text;
* **selectedItems:**(required): Items that were selected by the user.;

#### Used versions

##### Bootstrap 
"version": `3.3.7`
##### Angular
version": `1.2.32` 
<hr>

### License

It is available under the MIT license.
[License](https://opensource.org/licenses/mit-license.php)
