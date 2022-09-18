import React, {Fragment} from 'react';
import MainLayout from "pages/App/MainLayout";
import useNotifier from "modules/useNotifier";
import ModalsContainer from "modals/ModalsContainer";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
    useNotifier();

    return (
        <Fragment>
            <CssBaseline/>
            <MainLayout/>
            <ModalsContainer/>
        </Fragment>
    );
}

export default App
