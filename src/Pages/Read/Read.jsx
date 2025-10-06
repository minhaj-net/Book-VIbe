import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredData } from "../../Utility/addToDB";

const Read = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    const storedBooksData = getStoredData();
    const convertedStoredData = storedBooksData.map((id) => parseInt(id));
    console.log(convertedStoredData);
    const myReadList = data.filter((book) =>
      convertedStoredData.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  console.log(data);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2>{readList.length}</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Read;
