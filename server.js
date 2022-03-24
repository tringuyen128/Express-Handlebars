const express = require('express');
const app = express();

//express handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// to use public files
app.use(express.static('public'))

// Routing homepage or index page
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home Page', 
        name: 'Tri Nguyen',
        age: 32,
        style: 'home.css',
        isDisplayedName: false
    });
  });

// About page
app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About Page',
        style: 'about.css',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'
    });
  });

// Dashboard page
app.get('/dashboard', (req, res) => {
    res.render('dashboard', { 
        isListEnabled: false,
        style: 'dashboard.css'
    });
  });

// Each helper 
app.get('/each/helper', (req, res) => {
    res.render('contact', {
        people: [
            "Liam",
            " Cha",
            " Me",
            " Voyeu",
            " Trina"
        ],
        user: {
            username: 'tringuyen128',
            age: 32,
            phone: 99999999
        },
        lists: [
            {
                items: ['Mango', 'Banana', 'Pineapple']
            },
            {
                items: ['Potato', 'Apple', 'Avocado']
            }
        ]
            
    });
  });

app.get('/look', (req, res) => {
    res.render('lookup', {
        user: {
            name: 'tringuyen',
            age: 32,
            phone: 9999999
        },
        people: [
            "Vo Yeu",
            "Trina",
            "Liam",
            "Cha",
            "Me"
        ]
        

    })
})







  app.listen(8080, () => {
console.log('server is starting at port', 8080);
});