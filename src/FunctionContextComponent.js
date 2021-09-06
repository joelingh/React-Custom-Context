import React, {useContext} from "react"
import { ThemeContext } from "./App"

import { ThemeContextFunction, ToggleButtonContextFunction } from "./ThemeContext"


export default function  FunctionContextComponent(){
    const value = ThemeContextFunction();
    const buttonvalue = ToggleButtonContextFunction();

    return(
        <div>
            <button onClick={buttonvalue}>Click</button>
            <p>Function Context Component</p>
            {value ? "true" : "false"}
            </div>
    )
}