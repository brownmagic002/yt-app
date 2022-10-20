import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    return (
        <div className="search-bar ui segment">
            <form
                className="ui form"
                onSubmit={(e) => {
                    e.preventDefault();
                    onFormSubmit(term)
                }}
            >
                <div className="field">
                    <label>Search For A Video</label>
                    <input
                        type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
};

export default SearchBar;