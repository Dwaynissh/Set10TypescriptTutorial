// Working with Primitive Datatypes

// Strings
const myName: string = "Mije";
let myCar: string = "Mercedes Benz";

// Booleans
const genderIsFemale: boolean = true;
const isPaymentCompleted: boolean = false;

// Number
const age: number = 55;
const height: number = 180;

// Undefined
const url: undefined = undefined;
const checkingResponse: undefined = undefined;

// Working with Non-Primitive Datatypes

// Empty array
const arr: [] = [];

// An Array of Strings
const arrOfStrings: string[] = ["Red", "Blue", "Yellow", "Purple", "Pink"];

// An Array of Numbers
const arrOfNumbers: number[] = [1, 2, 3, 4, 5];

// An Array of Boolean
const arrOfBoolean: boolean[] = [true, false];

// An Array of Boolean
const arrOfUndefined: undefined[] = [undefined, undefined];

// Working with objects

// Empty object
const all: {} = {};

// Nested Objects

const person: {
  name: string;
  gender: string;
  hasPaidFees: boolean;
  isUndefined: undefined;
} = {
  name: "Mije",
  gender: "Male",
  hasPaidFees: true,
  isUndefined: undefined,
};

const persontwo: {
  name: string;
  gender: string;
  hasPaidFees: boolean;
  isUndefined: undefined;
  hobbie: {}[];
} = {
  name: "Mije",
  gender: "Male",
  hasPaidFees: true,
  isUndefined: undefined,
  hobbie: [
    "Games",
    "Football",
    "Coding",
    "Music",
    {
      names: "jk3qdnq",
    },
    {
      names: "jk3qdnq",
    },
  ],
};
