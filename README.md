# ngx-select2
Angular X wrapper for Select2 jQuery plugin

#### Usage
install [select2](https://select2.org/) jQuery plugin
```
npm install --save select2
```

Inlcude select2 plugin into your .angular-cli.json config file
```
"styles": [
        "styles.css",
         ...
         ...
         "../node_modules/select2/dist/css/select2.min.css"
"scripts": [
          ..
          ..
          "../node_modules/select2/dist/js/select2.min.js"
          ]
]
```
Include ngx-select2 into your module
```
import {Select2Directive} from "./my_directives/select2.directive";
...
...
declarations[
        ...
        Select2Directive
]
```
Start using it in your template
```
<select  class="form-control" [(ngModel)]="currentValue" select2>
                    <option value=1> Item1</option>
                    <option value=2> Item2</option>
                    ...
</select>
```


#### Notes
- The directive works just fine with reactive forms.
- Multiple selection is not supported yet (TODO).
