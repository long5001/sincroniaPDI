var test3 = Class.create();
test3.prototype = {
  initialize: function () {},

  newFunction: function () {
    //test 32

    let arr = [1];
    gs.info([...arr, 2, 3]);
  },

  type: "test3",
};
