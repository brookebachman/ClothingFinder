import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  TextField,
  Button,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
let axios = require("axios").default;

const Home = () => {
  const [item, setItem] = useState("");
  const [value, setValue] = useState("");
  const [clothing, setClothing] = useState([]);
  const [results, setResults] = useState([]);

  const captureSearchTerm = (event) => {
    event.preventDefault();
    console.log(item, "new item");
    let options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/v2/auto-complete",
      params: {
        q: item,
        country: "US",
        currency: "USD",
        sizeSchema: "US",
        store: "US",
        lang: "en-US",
      },
      headers: {
        "x-rapidapi-key": "eeee06b9a1msh54413fe3cc84b29p13c77ejsn712f7f972946",
        "x-rapidapi-host": "asos2.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setClothing(response.data.suggestionGroups[0].suggestions);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getClothingItems = () => {
    let options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v2/list/",
      params: {
        offset: "0",
        categoryId: "4209",
        limit: "48",
        store: "US",
        country: "US",
        currency: "USD",
        sort: "freshness",
        lang: "en-US",
        q: value,
        sizeSchema: "US",
      },
      headers: {
        "x-rapidapi-key": "eeee06b9a1msh54413fe3cc84b29p13c77ejsn712f7f972946",
        "x-rapidapi-host": "asos2.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setResults(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <>
      <InputLabel>Search for an item of clothing</InputLabel>
      <FormControl>
        <TextField
          onChange={(event) => setItem(event.target.value)}
          id="filled-basic"
          variant="filled"
          value={item}
        />
        <Button variant="outlined" color="primary" onClick={captureSearchTerm}>
          Search
        </Button>

        <FormHelperText id="my-helper-text"></FormHelperText>
        {clothing !== [] ? (
          <>
            <Autocomplete
              id="combo-box-demo"
              options={clothing}
              getOptionLabel={(option) => option.searchTerm}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" />
              )}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
            <Button
              onClick={getClothingItems}
              variant="outlined"
              color="primary"
            >
              Search
            </Button>
          </>
        ) : null}
      </FormControl>{" "}
    </>
  );
};

export default Home;
