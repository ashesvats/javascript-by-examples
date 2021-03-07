const geners=[
  {
    id:1,
    name:"rock"
  },
  {
    id:2,
    name:"pop"
  },
  {
    id:3,
    name:"jazz"
  }
]

let ids=[1,2,3]

ids = new Proxy(ids, {
  get(target, prop) {
    if (prop in target) {
      return geners[prop];
    } else {
      return 0;
    }
  }
});

console.log("num",ids[0])
