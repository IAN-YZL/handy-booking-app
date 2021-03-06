import React from "react";
import styled from "styled-components";
import LinkItem from "../../../LinkItem";
import Dropdown from "../Dropdown";

const Wrapper = styled.div`
  position: relative;
`;

class CategoriesDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown(event) {
    event.preventDefault();

    this.setState((prevState) => ({
      showDropdown: !prevState.showDropdown,
    }));
    console.log(this.state.showDropdown);
  }

  render() {
    const showDropdown = this.state.showDropdown;

    return (
      <Wrapper
        onMouseEnter={this.toggleDropdown}
        onMouseLeave={this.toggleDropdown}
      >
        <LinkItem href="/service" linkType={"nav"}>
          Service
        </LinkItem>
        {showDropdown && <Dropdown />}
      </Wrapper>
    );
  }
}

export default CategoriesDropdown;
