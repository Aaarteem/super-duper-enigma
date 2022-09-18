import React from 'react';
import {createRoot} from 'react-dom/client';
import 'regenerator-runtime/runtime'
import App from './App'
import createAppStore from "./modules/createAppStore";
import {Provider} from "react-redux";
import {createBrowserHistory} from "history";
import {SnackbarProvider} from "notistack";
import IconButton from "@mui/material/IconButton";
import IconClose from "@mui/icons-material/Close";


const history = createBrowserHistory()
const store = createAppStore(history)

const notistackRef = React.createRef();

const onClickDismiss = key => () => {
    notistackRef.current.closeSnackbar(key);
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <SnackbarProvider
            maxSnack={3}
            ref={notistackRef}
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            action={(key) => (
                <IconButton onClick={onClickDismiss(key)}>
                    <IconClose/>
                </IconButton>
            )}>
            <App history={history}/>
        </SnackbarProvider>
    </Provider>
);