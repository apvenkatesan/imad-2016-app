var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    articleOne:{
        title:"Article One - Venktesan",
        heading:"Article One",
        date:"Sep 5, 2016",
        content:`
            <p>
               This is the code for my Article One.
               This is the code for my Article One.
               This is the code for my Article One.
               This is the code for my Article One.
            </p>
            <p>
               This is the code for my Article One.
               This is the code for my Article One.
               This is the code for my Article One.
               This is the code for my Article One.
            </p>
            <p>
               This is the code for my Article One.
               This is the code for my Article One.
               This is the code for my Article One.
               This is the code for my Article One.
            </p>`
    },
    articleTwo:{
        title:"Article Two - Venktesan",
        heading:"Article Two",
        date:"Sep 10, 2016",
        content:`
            <p>
               This is the code for my Article Two.
               This is the code for my Article Two.
               This is the code for my Article Two.
               This is the code for my Article Two.
            </p>
            `
    },
    articleThree:{
        title:"Article Three - Venktesan",
        heading:"Article Three",
        date:"Sep 15, 2016",
        content:`
               This is the code for my Article Three.
               `
    }
};

var createTemplate = function (data) {
    title = data.title;
    heading = data.heading;
    date=data.date;
    content = data.content

    var htmlTemplate = `
        <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
               <hr/>
               <h3>${heading}</h3>
               <div>
                   ${date}
               </div>
               <div>
                    ${content}
               </div>
           </div>
        </body>
    </html>
    `
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req,res) {
    articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName])); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
