import React, { useEffect, useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent";

import ThemeProvider from "./ThemeContext";

function App() {

  return (
<div>
    <ThemeProvider>
      <FunctionContextComponent></FunctionContextComponent>
    </ThemeProvider>
</div>
  );
}

export default App;
