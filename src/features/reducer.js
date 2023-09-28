const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  agreed: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // ... Other actions go here.

    default:
      return state;
  }
}
