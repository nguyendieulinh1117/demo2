# obbin
Simple library used to render the user interface

Create global variables
``` js
window.$s = ObbinJS;
```

Initialize the initial value and data
``` js
window.$s.set('objectName', defaultValue, commit?);
```

Data validators when data changes
``` js
window.$s.validators('objectName',[v => v instanceof Array,])
```

Track the variable when the variable's data is changed
example:
``` js
$s.watch('objectName', function (newValue, oldValue) {
    console.log('holla', newValue, oldValue);
},1000);
```

ObbinJS accomplishes this by building a virtual DOM to keep track of the changes it needs to make to the real DOM. Taking a closer look at this line:
``` js
return el('p', { children:[context.newValue] })
```
example:
``` js
window.$s.liveDOM('objectName', '#selector', function (context, el) {
    return el('p', {
        attrs: { class: 'mb-0' },
        children: [context.newValue.value]
    })
}, { 
    created: function(context, el){
        console.log('called when the dom tree is first initialized');
    },
    mounted: function(context, el){
        console.log('invoked when the dom tree is updated due to data change');
    }
});
```
