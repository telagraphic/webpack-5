const object = {
  name: "nick",
  code: "webpack"
}

const newObject = {
  ...object,
  version: "1"
}

console.log(object, newObject)
