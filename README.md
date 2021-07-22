# React-Redux-Boilerplate

# How to get Started
You can consider this regular React project created with Create-React-App method, with auto integrated React Redux template.

Just Clone this repo by 

```
git clone https://github.com/TheAzharZaman/React-Redux-Boilerplate.git
```
Navigate to download folder by:

```
cd React-Redux-Boilerplate
```

Then use this command to install required packages and dependencies

```
npm install
```
Youi are good to go :)

## Creating Store
This biolerplate use @reduxjs/toolkit@1.5.0 and built on slices concept as one of the slice:

```
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload.change;
    },

    decrement: (state, action) => {
      state.count -= action.payload.change;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state) => state.counterStore.count;

export default counterSlice.reducer;

```
Then all the slices are merged into rootReducer called reducer in this case, 
and at the same time store is create by configureStore from reduxjs/toolkit instead of crateStore usually used;

```
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import userReducer from "./slices/userSlice";

export default configureStore({
  reducer: {
    counterStore: counterReducer,
    userStore: userReducer,
  },
});

```

Till now we have initialStates in our store like;

![alt text](https://i.ibb.co/qRVJfQ3/sa.png)

## Pulling from Store

For this we use useSelector hook from 'react-redux' to pull giving a exported function as an argument from respected Slice like:
```
import { selectCount } from "./redux/slices/counterSlice";
import { useSelector } from "react-redux";

const App = () => {
  const count = useSelector(selectCount); // Get count from userStore

  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
};

export default App;
```
## Modifiying Store

We can modify store we created earlier by dispatching methods we exported from slice file like this.

```
import { decrement, increment } from "./redux/slices/counterSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch(); // Firing Gun to modify store
  const [payload, setPayload] = useState(1); // Counter Payload (if need)

  return (
    <div>
      <h3>Redux Template For Future Use</h3>
      <button onClick={() => dispatch(increment(payload))}>+</button>
      <h3>{count}</h3>
    </div>
  );
};

export default App;
```
---
That is! I hope It was easy to Understand
Thanks for being here! I would be glad if someone contributes to it
