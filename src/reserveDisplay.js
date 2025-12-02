const reserveDisplayName = (id, itemArray) => {
  if (!Array.isArray(itemArray)) return null;
  const item = itemArray.find((el) => el.id === id);
  return item?.name ?? null;
};

export default reserveDisplayName;