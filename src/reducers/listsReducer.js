import { CONSTANTS } from "../actions";

let listID = 3;
let cardID = 6;

const initialState = [
  {
    title: "未着手",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "英語勉強"
      },
      {
        id: `card-${1}`,
        text: "Reactでアプリ作成"
      }
    ]
  },
  {
    title: "処理中",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "TypeScript勉強"
      }
    ]
  },
  {
    title: "完了",
    id: `list-${2}`,
    cards: [
      {
        id: `card-${3}`,
        text: "Redux勉強"
      },
      {
        id: `card-${4}`,
        text: "Twilio勉強"
      },
      {
        id: `card-${5}`,
        text: "ブログ書く"
      }
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`
      };
      listID += 1;
      return [...state, newList];
    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`
      };
      cardID += 1;

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });

      return newState;
    }
    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        droggableId,
        type
      } = action.payload;
      const newState = [...state];

      if (type === "list") {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      //in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      // other list
      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.find(list => droppableIdStart === list.id);
        const card = listStart.cards.splice(droppableIndexStart, 1);
        const listEnd = state.find(list => droppableIdEnd === list.id);
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;

    default:
      return state;
  }
};

export default listsReducer;
