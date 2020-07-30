# Welcome to the React Router Playground

## A Hands-on Guide on React Router

In this guide you will learn about react-router.

### Installation

Make sure your repository has the latest update and is synced with Turnout-Activism/ReactPlayground development branch

```shell script
git pull upstream development
```

In order to install dependencies simply run

```shell script
npm i 
```

### Setup

Now that you have everything set up let's quickly go over a simple React app with Router. If you have experience working with HTML, you would know HTML files are static web pages and in order to navigate between them you would use something like:

```html
<a href="website-uri/page2">page 2</a>
```

in your `page 1`.

Now a react.js app is a single page application, meaning there is no way for you to define multiple static pages.(unless you would use appropriate plugins and frameworks to create static pages). For us to be able to enjoy navigation we need to use react router. react router will query and load the components and we can treat them as pages. Here is the very foundation of every react app with router setup.

**App.js**

```js
import { BrowserRouter, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Container className="my-4">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/interns/internName" component={internNamePage} />
            <Route component={PageNotFound} />
          </Switch>
        </Container>
      </BrowserRouter>
      <Footer />
    </>
  );
};
```

### Route

`Route` is the most important component that you will need to learn about. it assigns and renders a component to a path. for example if user hits "www.turnup.com/about" we will render `About` component into or `Container` in `App.js`. [Find more about Route](https://reactrouter.com/web/api/Route)

### Switch

`Switch` only renders the first component that matches the route. We wrap `Switch` around our `Rout`s to make sure only one page would load at a time. [more on Switch](https://reactrouter.com/web/api/Switch)

> In the above example, since we have not specified a path for the last `<Route component={PageNotFound} />` it will be loaded if `switch` cannot match the queried URL with any of the defined paths. That means the page is not found will be loaded for any path that does not exist in our setup.

#### BrowserRouter

we will use `BrowserRouter` as a wrapper around any component that needs to use navigation or be used as route. `BrowserRouter` keeps track of things such as history or the behavior of navigation. If you want to read more about this [read this up](https://reactrouter.com/web/api/BrowserRouter).

now let's look at our `Navigation.js` component.

```js
import { Link } from "react-router-dom";
<navbar>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/interns/interName">interName</Link>
</navbar>;
```

Notice that we are not using anchor tags like `<a href='/about'></a>` but a `Link` component provided by react router. If we use anchor tag in our Navigation, we are still able to navigate to the destination path since our `App.js` knows how to handle the URL, but using `Link` has a big advantage over anchor tag. It does not load and re-render the whole page again. It only renders the components that we asked for and unmount any component that is navigated away. For example if you are at the **home page** and want to navigate to the **about page** using the `Link` component, the `Home` component will be unmounted and the `About` component will be mounted into our `App` without having to reload the whole page again.

Now that was it for the most part. There are still things that left uncovered, but we will not deal with them for now (or maybe never for this project).

## React Router Task

For this assignment run the app by `npm start`. In the Navigation bar look for `Interns` Dropdown and navigate to `React Task 2`.
