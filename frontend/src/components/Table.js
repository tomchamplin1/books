import React, { useEffect, useState } from "react";

import axios from "axios";

export default function Table() {
  const [entries, setEntries] = useState([]);
  const [refreshData, setRefreshData] = useState(false);

  useEffect(() => {
    var url = "https://www.googleapis.com/books/v1/volumes?q=quilting";
    axios
      .get(url, {
        responseType: "json",
      })
      .then((response) => {
        if (response.status === 200) {
          var entries = [response.data];
          console.log(entries);
        }
      });
  }, []);

  if (refreshData) {
    setRefreshData(false);
  }
  return (
    <div>
      {entries.map((entry, i) => (
        <div key={entry.name}>(entry.items.volumeInfo.title))</div>
      ))}
    </div>
  );
}
