import { collection, getDocs } from "@firebase/firestore";

/**
 * @param {} url The url to fetch from.
 * @param {*} options The options for the fetching process.
 * @returns it will return what any fetch would do.
 */
async function fetsh(url, options = {}) {
  return new Promise(async (res, rej) => {
    try {
      let fetched = await fetch(url, options);
      fetched = await fetched.json();
      res(fetched);
    } catch (err) {
      rej(err);
    }
  });
}

async function getCollectionDocumentsNamesAsInArray(db, collectionName) {
  const branchesCollectionRef = collection(db, collectionName);
  const branchesCollection = await getDocs(branchesCollectionRef);
  const docs = branchesCollection.docs;
  let result = docs.map((doc) => {
    return doc.id;
  });
  return result;
}
async function getCollectionDocumentsAsInArray(db, collectionName) {
  const branchesCollectionRef = collection(db, collectionName);
  const branchesCollection = await getDocs(branchesCollectionRef);
  const docs = branchesCollection.docs;
  let result = docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return result;
}

function filterObject(obj, removes, callback = () => {}) {
  let newOb = {};
  let obInAr = [];
  Object.fromEntries(
    Object.entries(obj).filter(([key, val]) => {
      obInAr.push([key, val]);
    })
  );
  obInAr.forEach(([key, val]) => {
    if (typeof removes == "string") {
      if (key != removes) {
        newOb[key] = val;
      }
    } else if (typeof removes == "object") {
      let isBlocked = null;
      removes.forEach((remove) => {
        if (key == remove) {
          isBlocked = true;
        }
      });
      if (!isBlocked) {
        newOb[key] = val;
      }
    }
  });
  return newOb;
}

function sortObjectsInArray(obj, sortByField) {
  return obj.sort(function (a, b) {
    let nameA = a[sortByField];
    let nameB = b[sortByField];
    if (typeof nameA == "string") nameA = nameA.toUpperCase();
    if (typeof nameB == "string") nameB = nameB.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
}

function prettyName(name) {
  if (!name) return "User";
  let newName = name.split(" ");
  newName = [
    newName[0][0].toUpperCase(),
    newName[0].substr(1),
    " ",
    newName[1][0].toUpperCase(),
    newName[1][1].toUpperCase(),
    ".",
  ];
  return newName.join("");
}

/**
 * @return this function compares a value from an array and returns true if the value exist in one of values in the array
 * @param {Array} array array to compare from ;
 * @param {String | Array | Number | Object} valueToCompare value to compate to;
 */
function checkOneOfArray(array, valueToCompare) {
  if (
    valueToCompare === undefined ||
    valueToCompare === null ||
    array === undefined ||
    array === null
  ) {
    return false;
  }
  if (array.indexOf(valueToCompare) >= 0) {
    return true;
  } else {
    return false;
  }
}

export {
  fetsh,
  getCollectionDocumentsNamesAsInArray,
  getCollectionDocumentsAsInArray,
  filterObject,
  sortObjectsInArray,
  prettyName,
  checkOneOfArray,
};
