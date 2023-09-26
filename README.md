# <a name="_oq0ljwq35cmi"></a>**Blog Website**
This project is a blog website built using React that fetches data from an external API and displays it on various pages. It also includes a theme-switching feature, allowing users to switch between light and dark modes for an improved reading experience.

## <a name="_vrulxcz4ltg9"></a>**Getting Started**
To run the project locally, follow these steps:

1. Clone the repository to your local machine.
1. Install project dependencies using npm install or yarn install.
1. Start the development server with npm start or yarn start.
1. Explore the blog website and enjoy the theme-switching feature.

## <a name="_7nwvhf8xvyj3"></a>**Technologies Used**
- React: For building the user interface and managing state.
- Tailwind CSS: For styling and responsive design.
- Axios: For making API requests.
- use-local-storage: For managing theme preferences.

## <a name="_jds8gppvjm32"></a>**Project Structure**
`**index.js**`

- The index.js file is the entry point of the application.
- It initializes the React app, sets up the root element, and renders the main App component wrapped in a context provider.

`**App.js**`

- The ‘App.js’ file represents the core of the application.
- It utilizes React hooks and the context API to manage and share data across components.
- Key functionalities include fetching and displaying blog posts, implementing pagination, and applying theme changes based on user preferences.
- The ‘useEffect’ hook ensures that blog posts are fetched and theme settings are applied after the component is rendered.

### <a name="_k3ncuqv2jno8"></a>**`index.css`**
- The index.css file contains the project's styling, utilizing the Tailwind CSS framework.
- Custom properties (CSS variables) are defined for light and dark mode, allowing for easy theming customization.
- Different styles for light and dark modes are specified based on the chosen theme.


# <a name="_4u8occn4rz3g"></a>**Blog Website Components**
This project comprises several React components that together create a blog website. Each component has a specific role in rendering and managing different aspects of the website.
## <a name="_fpgae979ym8g"></a>**Component Descriptions**
### <a name="_pg8rzdrg55p6"></a>**`Darkmode.js`**
- The Darkmode component is responsible for rendering and managing the dark mode and light mode theme toggle button.
- It utilizes the useContext hook to access the theme and theme-switching function from the context.
- The button allows users to switch between dark and light themes, and the icon changes accordingly.
### <a name="_wd15ar7qly8f"></a>**`Header.js`**
- The Header component represents the website's header section.
- It displays the website's title and includes the Darkmode component for theme toggling.
- The header also applies styling and shadow effects based on the selected theme.
### <a name="_gfao843vjw0j"></a>**`Pagenation.js`**
- The Pagenation component handles pagination controls for navigating between blog pages.
- It retrieves data from the context, including the current page number and total page count.
- Users can click "Previous" and "Next" buttons to navigate between pages, and the component updates accordingly.
### <a name="_f3d40onfitie"></a>**`Posts.js`**
- The Posts component is responsible for rendering blog posts.
- It utilizes context data to display either a loading spinner or a list of blog posts.
- The component also handles edge cases, such as when no posts are found or when posts contain tags.


## <a name="_mavvn6hdnfyr"></a>**Component Interaction**
- These components interact with the central application context (AppContext) to access and manage data, such as theme preferences, blog posts, and pagination.
- The components use hooks like useContext and useState to ensure responsive and dynamic user interactions.
## <a name="_8ubf5aflztoy"></a>**Styling**
- Styling is achieved using Tailwind CSS classes and custom CSS properties.
- The components adapt their appearance based on the selected theme, providing a cohesive user experience.
## <a name="_mq6c0hyjqhix"></a>**Dependencies**
- React: For building the user interface.
- React Icons: For displaying theme toggle icons.
- Tailwind CSS: For styling and responsive design.
- use-local-storage: For managing theme preferences.


# <a name="_ozof5msknm54"></a>**AppContext.js**
## <a name="_dtyb7l5i7nik"></a>**Project Context**
In this project, the AppContext.js file plays a crucial role in managing and sharing data across various components. It follows the React Context API to provide a central storage and communication hub for data that needs to be accessible throughout the application.
## <a name="_xr9wbwuqdt8q"></a>**Context Creation Steps**
### <a name="_2uypupj4tipt"></a>**Step 1: Creating the Context**
- The first step involves creating a context using createContext from React. This context serves as a container for the data that will be shared among components.
### <a name="_zh79brmk0pbq"></a>**Step 2: Providing Data to Children**
- The AppContextProvider function acts as a wrapper around the entire application, making it possible to provide data to all its children components.
- It initializes and manages various state variables, including loading, pageNumber, toatalPageNumber, posts, and theme. These variables store important information related to the blog posts and the chosen theme.
### <a name="_souip1xpjcj9"></a>**Step 3: Sending Data for Consumption**
- In the final step, the value object is created, which contains all the data and functions that need to be shared with child components.
- The AppContext.Provider component wraps the entire application, making the value object accessible to all child components that subscribe to the context.
## <a name="_rcb9flywomn5"></a>**Key Data and Functions**
### <a name="_p2lyohkri225"></a>**Data Variables**
- loading: A boolean variable to indicate whether data is currently being fetched.
- pageNumber: Keeps track of the current page number of the blog posts.
- toatalPageNumber: Stores the total number of pages available.
- posts: An array to hold the fetched blog posts.
- theme: Manages the application's theme, including both light and dark modes.
### <a name="_sfuttqlm6s15"></a>**Functions**
- fetchBlogPosts(pageNumber): A function responsible for making API calls to fetch blog posts based on the specified page number.
- handlePageChange(pageNumber): Handles page navigation by updating the pageNumber and triggering a new data fetch.
- switchTheme(): Toggles the application's theme between light and dark modes.
## <a name="_raft9qw7duyp"></a>**Theme Handling**
- The context also includes logic for managing the application's theme, allowing users to switch between light and dark modes.
- The default theme is determined based on the user's system preferences, but it can also be customized using local storage.
## <a name="_yilt8y4t2ht"></a>**Usage**
- To access data and functions provided by the context, child components simply need to import and use the useContext hook with AppContext.
## <a name="_h1p33kw3i2i8"></a>**Dependencies**
- The context makes use of the use-local-storage package to manage and persist theme preferences.


## <a name="_qzqo0opxburf"></a>**Contribution**
Contributions to this project are welcome! If you'd like to contribute, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and submit a pull request.


