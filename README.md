# Development

### Link to Deployed Website
https://tranquilturtle781.github.io/fruit-development

### Goal and Value of the Application
This application is designed to provide users with an interactive and accessible way to learn more about their favorite fruits, and discover new fruits. By using this application, users can easily compare the nutritional contents of different fruits and learn a little bit about plant taxonomy!

### Usability Principles Considered
The application has a clear hierarchy, which is created by using both visual elements and strategic text. All of the filtering and sorting controls are located in a single text box with a distinct background color to clearly identify it as the navigation tool of the page. Bolded header text divides this box into different sections (various filtering and sorting categories), to allow for intuitive use. Additionally, I made sure to use radio and check box selections appropriately to clearly show a user which selections could be made at the same time, and which were mutually exclusive. Each fruit is displayed on an individual card, and distinct visual elements are used to clearly divided each fruit's information into the filterable attributes, sortable information, and add to favorites button. I have worked to make the page accessible by ensuring that all images have alt text, choosing colors that cause no significant contrast issues, and using a font that is simple, in an easily readable size.

### Organization of Components
I am using 2 components outside of App.js, a Fruit component, which deals with the information about a single fruit, and a FavsList component, which serves as my aggregator.

### How Data is Passed Down Through Components
I pass item and changeFavs into my Fruit component. "item" contains the data for a single fruit. I access different attributes of "item" to create the fruit card in HTML. "changeFavs" allows me to have an onClick functionality of my "add to favorites" button for each fruit. The function that is passed down through this will change a boolean indicating if the fruit is currently a favorite, and change favList and aggVal, two states, appropriately. 

My FavsList component receives three different pieces of data: fruitData, all of the fruit data from a json, 

### How the User Triggers State Changes

