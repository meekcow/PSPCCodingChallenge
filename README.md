# PSPC Take Home Developer Challenge (NextGen Travel)

This is to display yummy cheeses and data about them yup yup

## Choosing JavaScript + HTML
My first instinct was to consider what would be the fastest way to create a UI that could display this data interactively and be fast and simple.
I landed upon Python GUI vs simple HTML webpage supported by JavaScript. As I would in the workplace, I quickly Googled some documentation/tutorials as well as consulted some of my friends to see if they had any other ideas. I ultimately decided to use HTML/JS as it would be more portable and is something I'm currently familiar with.

## Brainstorming
- Simple webpage
- Agriculture and Agri-Food Canada Cheese Directory < Title

[Search?] [EN/FR]

[CHEESE NAME]

[Cheese profile]
[Manufacturer's profile]

[Previous Button] [Next Button]

## Timeline and Issues
The overall development process took me just north of 3 hours. The first little while was brainstorming how I wanted to webpage to look after deciding to go with a webpage.

After spending around 20-30 minutes laying out all the data fields and labels, I spent another 20-30 minutes making it more readable and messing with the styling so that I could end up with a webpage that could display the cheese data in a profile like way. My early focus was to create a prototype that would create a visually decent user interface

After this I moved onto trying to get a request from the API. I had thought this part would be easy because I knew roughly how to do it and that once I can grab the JSON object, all that would be left would be to parse it into the respective fields. However, this part took almost an entire hour because I encountered a bunch of CORS errors, eventually realizing that doing all of this work from my file system instead of hosting a local server or some similar web environment would prevent me from making FETCH/GET requests. Most of the time was spent troubleshooting and coming to this conclusion. After also realizing that reading a file locally would also be difficult, I settled upon having to make the user upload the .json file.

The last hour was spent creating some more functionality such as a previous/next button as well as en/fr buttons.

I decided to spend all this extra time because these things were the barebones of what I wanted, and I encountered some unforeseen difficulties along the way.

## Possible Improvements
- Implement a search bar to allow user to search by ID or Name of cheese
- Create an index page that lists and links the profiles of all cheeses by name/id
- Move all descriptions/titles/name values into a constants file that can be changed/accessed more easily
- Make the labels and other parts of the webpage change language rather than only the cheese details
- Change the overall element into a formgroup so that the data can be saved and accessed as JSON object
- Allow editing by changing everything into text fields that are interactive
- Save the backend data into a database
- Test accessibility with JAWS or a similar screen-reader

## References
https://docs.microsoft.com/en-us/learn/modules/build-simple-website/

https://www.w3schools.com/css/css_inline-block.asp (+ much more w3 school references)

A bunch of references on stack exchange for CORS issue and access-control-allow-origin issue for fetching from API

https://web.dev/read-files/
