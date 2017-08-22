var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one': {
        title:'article one hemant kumar',
        heading:'article one',
        date:'5 sep 2017',
        content:` <p>
                    THis is the my first content.I also learn the html and css few lines of coding. THis is the my first content.I also learn the html and css few lines of coding. THis is the my first content.I also learn the html and css few lines of coding.
                </p>
                 <p>
                    THis is the my first content.I also learn the html and css few lines of coding. THis is the my first content.I also learn the html and css few lines of coding. THis is the my first content.I also learn the html and css few lines of coding.
                </p>
                 <p>
                    THis is the my first content.I also learn the html and css few lines of coding. THis is the my first content.I also learn the html and css few lines of coding. THis is the my first content.I also learn the html and css few lines of coding.
                </p>`
    
},
    'article-two': {
         title:'article two hemant kumar',
        heading:'article two',
        date:'15 jan 2017',
        content:` <p>
                    this is content for second article
                </p>`
    
    },
    'article-three': {
         title:'article thee hemant kumar',
        heading:'article three',
        date:'25 oct 2017',
        content:` <p>
                    this is content for second article
                </p>`
    
    }
};
function createTemplate (data) {
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=`
    <html>
        <head>
            <title>
                ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class ="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
             ${heading}
            </h3>
            <div>
                 ${date}
            </div>
            <div>
                ${content}
            </div>
            </div>
        </body>
    </html>
    `;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req, res){
    counter = counter +1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name',function(req, res){//URL:/submit-name?name=xxxx
    //Get the name from request
    var name = req.query.name;//TODO
    
    names.push(names);
    //JSON:java script object notation
    res.send(JSON.stringify(names));
    
    res.send(names);//TODO
    
});

app.get('/:articleName',function(req, res){
    //articleName==article-one
    //articles[articleName]== {} content object for article one
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
