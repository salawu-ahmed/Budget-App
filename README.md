# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# How to use the useContext API
step 1. create your context 
    const AppContext = createContext()

Step 2. create your provider and passing in the state using the value prop
    c
We first setup the initial state which our app will use 

we then create our context which is like our storeage for our state. we created it with the createContext

we then create a provider. As the name suggest this is the element that provides our state to the components in our project. Any component wrapped by the provider has access to our state 

The provider has a value prop which holds the values we would like to make available to our components