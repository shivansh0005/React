    const heading=React.createElement("h1",{id:"heading",class:"justtryingout"},"Hello world from react!");
    const root=ReactDOM.createRoot(document.getElementById("root"));
   // root.render(heading);
    const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
    [React.createElement("h1",{id:"c"},"I am h1 tag"),React.createElement("h2",{id:"c1"},"I am h2 tag")]))
    root.render(parent);