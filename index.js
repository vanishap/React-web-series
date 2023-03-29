const heading = React.createElement('h1', null, 'Hello world React ');
const title = ReactDOM.createRoot(document.getElementById('title'));
title.render(heading);


// nested html structure inside react.
//if I need to add more than one child(sibling) to the last child, then it should be
// given as an array.
const heading1 = React.createElement(
    'div', 
    null, 
    React.createElement(
        'div',
         null,
            [React.createElement('h1',{},"Welcome Vanisha"),
            React.createElement('h2',{},"Let's start practicing React" )]));
title.render(heading1);