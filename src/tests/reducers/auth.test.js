import authReducer from "../../reducers/auth";

test("should set default state", () => {
  const state = authReducer(undefined, "@@INIT");
  expect(state).toEqual({});
});

test("Should set uid with user id", () => {
  const state = authReducer(
    {},
    {
      type: "LOGIN",
      uid: "123",
    }
  );
  expect(state.uid).toBe("123");
});

test("should set state to default", () => {
  const currentState = {
    uid: "123",
  };
  const state = authReducer(currentState, {
    type: "LOGOUT",
  });
  expect(state).toEqual({});
});
