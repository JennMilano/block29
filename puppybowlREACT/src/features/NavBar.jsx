import React from "react";

  const NavBar = (props) => {
    return (
      <section>
        <label>
          Search:
          <input
            value={props.searchParameter}
            onChange={(event) => props.setSearchParameter(event.target.value)}
          />
        </label>
      </section>
    )
  }

  export default NavBar;