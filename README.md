## TIC-TAC-TOE

A single and multiplayer tic-tac-toe game written in React Native with AWS Amplify back-end.

### Notes on testing

`await findByText` more than one await in a test will log a warning when more than one `await` is used in a test. When using more than one `await` just use `getByText`

```
console.error
    Warning: You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);
```

reference issue - https://github.com/callstack/react-native-testing-library/issues/379
