import React, { useEffect } from "react";
import { Router } from "./router";
import { yup } from "./config";
import { setLocale } from "yup";

export const App = () => {
    useEffect(() => {
        setLocale(yup["es"]);
    }, []);

    return <Router />;
};
