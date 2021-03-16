# Rick and Morty 

## Available Scripts
In the project directory, you can run:
To start this project locally please run *yarn install*,  *yarn start*

### Technology stack

Built with React, Redux, Typescript, using mobile first approach.

### Project structure

*components* - components connected to the store
*lib* - reusable components
*constants* - generic constants
*img* - images, used in the app
*redux* folder keeps all redux logic. Splited up on actions, reducers, selectors
*types* - generic types used all over the app


### How the app works

App consist of one page, where you can search characters from Rick and Morty based on name. Filters for status dead/alive/unknown are also available. Upon click on every card you can see more information about each character. 
When scrolling down more characters are available for view. 


## Shortly about implementation

Component list is a component that accept children and limit. Styling include all layout, which make it easy reusable with different items and quantity. 
InfiniteScrollHOC will load characters when user scroll until the end of the page. Characters will be loaded based on the search query. The logic for it kept in loadAllCharacters action. If the next page exists in API and action called by Infinite scroll next page will be fetched. If page is the last, call will not be made. 
Filters made without an additional call to API, using redux action. 
I used reselect library for better memoization of selectors.

*What should be improved*
- functionality: I would add an advance filtering, based on every shown property of the character.
- styling, ui. Ideally using scss or styled components. 
- better error and loading handling. At the moment there is a separate screen for the cases, when api return 404, but there is an area for improvement. 
- lazy loading
- tests
