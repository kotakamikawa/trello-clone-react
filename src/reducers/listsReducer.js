const initialState = [
  {
    title: "Last Episode",
    id: 0,
    cards: [
      {
        id: 0,
        text: "ありがとうおいうございますよろしくお願います"
      },
      {
        id: 1,
        text: "よろしくお願います"
      }
    ]
  },
  {
    title: "This Episode is Second",
    id: 0,
    cards: [
      {
        id: 0,
        text: "Thank you"
      },
      {
        id: 1,
        text: "I had to do many things"
      }
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;
