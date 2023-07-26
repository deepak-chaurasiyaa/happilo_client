export const sleep = (delay = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

export const minMaxValueOfKeyFromArrayOfObject = (key, arrayOfObject) => {
  const minArr = arrayOfObject.map((data) => Number(data[key]));
  const min = typeof Math.min(...minArr) == 'number' ? Math.min(...minArr) : 0;
  const max = typeof Math.max(...minArr) == 'number' ? Math.max(...minArr) : 0;
  return { min, max };
};

export const getUniqueSubCollections = (products) => {
  const subCollections = {};
  products
    .filter((product) => product.parent_collection === 'bars')
    .forEach((product) => {
      product.sub_collection.forEach((subCollection) => {
        if (subCollection in subCollections) {
          subCollections[subCollection.type]++;
        } else {
          subCollections[subCollection.type] = 1;
        }
      });
    });
  return Object.entries(subCollections).map(([subCollection, count]) => ({
    subCollection,
    count,
  }));
};

export const getUniqueAvailableQuantity = (products) => {
  const available_quantities = {};
  products
    .filter((product) => product.parent_collection === 'bars')
    .forEach((product) => {
      product.available_quantity.forEach((available_quantity) => {
        if (available_quantity in available_quantities) {
          available_quantities[available_quantity.quantity_type]++;
        } else {
          available_quantities[available_quantity.quantity_type] = 1;
        }
      });
    });

  return Object.entries(available_quantities).map(([avilability, count]) => ({
    avilability,
    count,
  }));
};

export const getUniqueVendors = (products) => {
  const vendorCounts = products.reduce((counts, product) => {
    const { vendor } = product;
    counts[vendor] = (counts[vendor] || 0) + 1;
    return counts;
  }, {});
  const vendorArray = Object.keys(vendorCounts).map((vendor) => ({
    vendor,
    count: vendorCounts[vendor],
  }));
  return vendorArray;
};

export const getUniqueAvilability = (products) => {
  const avilabilityCounts = products.reduce((counts, product) => {
    const { avilability } = product;
    counts[avilability] = (counts[avilability] || 0) + 1;
    return counts;
  }, {});
  const avilabilityArray = Object.keys(avilabilityCounts).map(
    (avilability) => ({
      avilability,
      count: avilabilityCounts[avilability],
    })
  );
  return avilabilityArray;
};

export const isEmptyArray = (data) => Array.isArray(data) && data.length === 0;
export const notIsEmptyArray = (data) => Array.isArray(data) && data.length > 0;
