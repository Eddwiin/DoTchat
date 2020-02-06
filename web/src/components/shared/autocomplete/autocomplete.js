// Source: https://programmingwithmosh.com/react/simple-react-autocomplete-component/
import React, { useState, createContext } from "react";
import Suggestion from "./suggestion";

const AutocompleteContext = createContext(null);

const Autocomplete = props => {
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
    const { suggestions } = props;

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
        value={userInput}
        onChange={onChange}
      />
      <AutocompleteContext.Provider value={api}>
        <Suggestion></Suggestion>
      </AutocompleteContext.Provider>
    </form>
  );
};

export default Autocomplete;
export { AutocompleteContext };
