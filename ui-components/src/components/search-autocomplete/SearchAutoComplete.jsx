import React, { useState, useEffect } from "react";
import Layout from "../../routing/Layout";
import NavToHome from "../structure/nav-to-home/NavToHome";
import FetchedData from "../re-used/fetched-data/FetchedData";
import useFetch from "../../hooks/useFetch";
import "./SearchAutoComplete.css";
import Suggestions from "./Suggestions";

export default function SearchAutoComplete({ baseUrl }) {
  const [users, setUsers] = useState([]);
  const [userNames, setUserNames] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const { data, pending, error } = useFetch(baseUrl, {});

  useEffect(() => {
    if (data && data.users && data.users.length > 0) {
      const filteredUsers =
        searchParam.length > 1
          ? data.users.filter((user) => {
              return user.firstName
                .toLowerCase()
                .includes(searchParam.toLowerCase());
            })
          : data.users;
      setUsers(filteredUsers);
      setUserNames(data.users.map((userItem) => userItem.firstName));
    }
  }, [data, searchParam]);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();

    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        userNames && userNames.length
          ? userNames.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];

      setSuggestions(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  function handleSearch(e) {
    const userItem = e.target.innerText;

    setSearchParam(userItem);
    setShowDropDown(false);
  }

  function handleClearSearch() {
    setSearchParam("");

    if (showDropDown) {
      setShowDropDown(false);
    }
  }

  return (
    <Layout>
      {pending ? <h3 className="msg">Loading...</h3> : null}
      {error !== null ? <h3 className="msg">Error occured! {error}</h3> : null}
      <NavToHome componentTitle={"SearchAutoComplete"} />
      <div className="search-autocomplete-container">
        <div className="search-container">
          <input
            type="text"
            value={searchParam}
            className="search-bar"
            name="search"
            placeholder="Search..."
            onChange={handleChange}
          />
          {searchParam !== "" ? (
            <span className="material-icons-round" onClick={handleClearSearch}>
              close
            </span>
          ) : null}
          {showDropDown && (
            <Suggestions data={suggestions} handleClick={handleSearch} />
          )}
        </div>
        {users && users.length ? <FetchedData data={users} /> : null}
      </div>
    </Layout>
  );
}
