// 'use client'
// import React, { useState, useEffect } from 'react';
// import { ReactSearchAutocomplete } from 'react-search-autocomplete';

// type Item = {
//   id: number;
//   name: string;
// };

// function Search() {
//   const [selectedItem, setSelectedItem] = useState<Item | null>(null);

//   const items: Item[] = [
//     {
//       id: 0,
//       name: 'Cobol',
//     },
//     {
//       id: 1,
//       name: 'JavaScript',
//     },
//     {
//       id: 2,
//       name: 'Basic',
//     },
//     {
//       id: 3,
//       name: 'PHP',
//     },
//     {
//       id: 4,
//       name: 'Java',
//     },
//   ];

//   const handleOnSearch = (string: string, results: Item[]) => {
//     console.log(string, results);
//   };

//   const handleOnHover = (result: Item) => {
//     console.log(result);
//   };

//   const handleOnSelect = (item: Item) => {
//     setSelectedItem(item);
//   };

//   const handleOnFocus = () => {
//     console.log('Focused');
//   };

//   const formatResult = (item: Item) => {
//     return (
//       <>
//         <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
//         <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
//       </>
//     );
//   };

//   const renderResults = () => {
//     if (selectedItem) {
//       // Dynamically import useRouter on the client side
//       const { useRouter } = require('next/router');
//       const router = useRouter();

//       // Redirect to the result page with the selected item ID
//       router.push(`/result/${selectedItem.id}`);
//     }

//     return <div>No selected item</div>;
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div style={{ width: 400 }}>
//           <ReactSearchAutocomplete<Item>
//             items={items}
//             onSearch={handleOnSearch}
//             onHover={handleOnHover}
//             onSelect={handleOnSelect}
//             onFocus={handleOnFocus}
//             autoFocus
//             formatResult={formatResult}
//           />
//           {renderResults()}
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Search;
