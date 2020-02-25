// Source: https://programmingwithmosh.com/react/simple-react-autocomplete-component/
import React, { useState, createContext } from "react";
import Suggestion from "./suggestion";
import PropTypes from "prop-types";
import "./autocomplete.scss";

const AutocompleteContext = createContext(null);

const Autocomplete = ({ suggestions, placeholder = "Search..." }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState("");

  const api = {
    filteredSuggestions,
    setFilteredSuggestions,
    showSuggestions,
    setShowSuggestions,
    userInput,
    setUserInput
  };

  const onChange = event => {
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setFilteredSuggestions(filteredSuggestions);
    setShowSuggestions(true);
    setUserInput(event.target.value);
  };

  return (
    <form autoComplete="off" className="autocomplete">
      <input
        className="autocomplete__input"
        type="text"
        placeholder={placeholder}
        value={userInput}
        onChange={onChange}
      />
      <AutocompleteContext.Provider value={api}>
        <Suggestion></Suggestion>
      </AutocompleteContext.Provider>
    </form>
  );
};

Autocomplete.propType = {
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string
};
export { Autocomplete, AutocompleteContext };
