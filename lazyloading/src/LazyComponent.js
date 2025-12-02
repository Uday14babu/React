import React from "react";

const LazyComponent=()=>{
    return(
        <div>
            <h2>This is a Lazy-loaded Component</h2>
            <p>This content loads only when needed</p>
        </div>
    );
}
export default LazyComponent;