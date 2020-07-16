import React, { useContext } from "react";
import { AutocompleteContext } from "./autocomplete";

const Suggestion = () => {
  const autocompleteContext = useContext(AutocompleteContext);

  const onClick = event => {
    autocompleteContext.setFilteredSuggestions([]);
    autocompleteContext.setShowSuggestions(false);
    autocompleteContext.setUserInput(event.currentTarget.innerText);
  };

  const showSuggestion = () => {
    if (autocompleteContext.showSuggestions && autocompleteContext.userInput) {
      if (autocompleteContext.filteredSuggestions.length) {
        return (
          <ul className="autocomplete__suggestion">
            {autocompleteContext.filteredSuggestions.map(suggestion => {
              return (
                <li
                  className="autocomplete__suggestion__name"
                  key={suggestion}
                  onClick={onClick}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className="autocomplete__suggestion__empty">
            <em>No suggestions!</em>
          </div>
        );
      }
    }
  };
  return (
    <div className="autocomplete__suggestion__content">{showSuggestion()}</div>
  );
};

export default Suggestion;
