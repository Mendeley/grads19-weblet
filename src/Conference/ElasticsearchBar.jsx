// import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import Input from "../Input";
// import { getElasticsearchResults } from "../api";

// const ElasticsearchBar = () => {
//   let history = useHistory();
//   const [EsSearchInput, setEsSearchInput] = useState("");

//   const handleSearch = event => {
//     setEsSearchInput(event.target.value);
//   };

//   const searchConferences = async () => {
//     try {
//       console.log(EsSearchInput);
//       const conferenceList = await getElasticsearchResults(EsSearchInput);
//       console.log(conferenceList);

//     } catch (error) { }
//   };

//   const onSubmit = ev => {
//     ev.preventDefault();
//     searchConferences();
//     //history.push("/search");
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <Input onChange={handleSearch} placeholder="Search..." />
//       <Input type="submit" value="Submit" />
//     </form>
//   );
// };

// export default ElasticsearchBar;
