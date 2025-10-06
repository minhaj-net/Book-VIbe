export const getStoredData = () => {
  const storedBookSTR = localStorage.getItem("readlist");
  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

export const addToStoredDB = (id) => {
  const storedBookData = getStoredData();
  if (storedBookData.includes(id)) {
    alert("This dara is exist ");
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readlist", data);
  }
};
