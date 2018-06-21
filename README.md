# Bar Chart Widget

To incoorparate widget in pre existing app, ***non-react*** application:

i. paste the folowing into target:
```
<script src="https://unpkg.com/getlibs"></script>    
<script>                                             
    System.import('./index.js');                     
</script>   
```                               

ii. by default, the bar chart component into a div with the id 
"chart". This can be modified by changing to the render call within
the index.js file, to point to a div with another id or class.

iii. the information visualized by the chart can be passed as a prop
to the BarChart component within index.js

data must as an array defined as follows:
    [
        {
            label: String,
            values: [
                {
                    x: String,
                    y: Integer
                },
                ...
            ]
        },
        ...
    ]

iv. if the BarChart component has no "legend" prop passed to it,
no legend will appear. For legend pass and array described by the following 
schema:
    [
        {color: String, label: String},
        ...
    ]
NOTE: String must be a valid color i.e. Hexadecimal colors, RGB colors
, RGBA colors, HSL colors, HSLA colors,or predefined/Cross-browser color names

![alt text](https://drive.google.com/file/d/16tMvyYmhJebpORj_WgZ5TS-NoLq5ef41/view?usp=sharing)
