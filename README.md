# Extra-Credit-yzhou43

I recreated the main pages from my project Milestone 2 and Milestone 3 using Bootstrap and React-Bootstrap. The complete project be found 
in the subfolder "Milestone 2" and "Milestone 3", and I copied the `index.html` of Milestone 2 and `App.js` of Milestone 3 in the root directory seperately.

## Milestone 2
To use the Bootstrap, we need to add `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">` into the `<head>` in the html file, and add `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>` into the `<body>` part.  
I used `class="container text-center"` and `class="row"` to build the layout of my webpage; `text-center` makes sure that all the contents will be displayed 
in the center of page. The `log out` component is outside the major container, and I used `class="position-absolute top-0 start-0"` to put the `log out` text into 
the top left position of the web page.  
The margins and paddings are controled by class like `"mt-3"` or `"mb-1"`, where "t" represents "top", and "b" represents "bottom". The larger the number is, 
the wider the margins/paddings are.

## Milestone 3
To use the npm React-Bootstrap, the first step is installation using `install react-bootstrap bootstrap@5.1.3`. For each component for the React-Bootstrap, 
we have to import them using `import { xxx } from 'react-bootstrap';`.  
I used `Container`, `Row`, and `Col` to build the layout of my main page, and these three components are part of the react-bootstrap Grid system. 
`className="justify-content-md-center text-center"` inside the `Container` makes sure that all the contents and texts can be displayed in the center of the page. 
And the width of each column and be assigned using parameters like `xs`.  
The color of text and button can be assigned by className. For example, `className="text-danger"` represents red color of text, and `variant="success"` determines 
the color of button as green. Besides, the spacing (padding and margin) can be assined using className `m`.  
`Button`, `Figure`, `Form`, `Table` are the bootstrap components that help me to add various elements into my webpage.
