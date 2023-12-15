import RecipeBaseForm from "./components/RecipeBaseForm/RecipeBaseForm.jsx";
import {Provider} from "react-redux";

import store from 'src/app/store.js'

function App() {
    return (
        <Provider store={store}>
            <RecipeBaseForm/>
        </Provider>
    )
}

export default App
