import { Box } from "@mui/material";

export enum State {
    Normal,
    Fail,
    Success
}

export function stateToFocused(state: State) {
    if (state == State.Fail) {
        return true
    }
    if (state == State.Normal) {
        return;
    }
    if (state == State.Success) {
        return true
    }
}
export function stateToColor(state: State) {
    if (state == State.Fail) {
        return "error"
    }
    if (state == State.Normal) {
        return;
    }
    if (state == State.Success) {
        return "success"
    }
}

export function stateToText(state: State) {
    if (state == State.Fail) {
        return (<Box color= "red" > The commitment and the message do not match.</Box>)
    }
    if (state == State.Normal) {
        return;
    }
    if (state == State.Success) {
        return (<Box color= "green" > The commitment and the message match.</Box>)
    }
}