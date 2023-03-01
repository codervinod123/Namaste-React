/*  this is how we create element in plain javascript*/

// const child=document.createElement('h1');
// child.innerText="namste React bro";
// const root=document.getElementById("root");
// root.appendChild(child);


    // type ||    props     ...children can be aarray  
    const heading1=React.createElement('h1',   {id:"heading"},      "Jay Mata di");
    const heading2=React.createElement('h2',   {id:"heading"},      "Jay Shree ram");
                      
                      
    //we can render more than 2 element because children can be given in the form of array
                              
    const parent=React.createElement('div',{className:"parent"},[heading1,heading2]);
                      
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
                             