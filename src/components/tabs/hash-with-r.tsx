'use client'

import { Box, TextField, Stack, Divider, Button } from "@mui/material";
import { useState } from "react";
import { createHash, randomBytes } from "crypto";
import { State, stateToColor, stateToFocused, stateToText } from "./common";

export default function HashWithR() {
    let [state, setState] = useState({ message: "", commit: "", random: "", state: State.Normal })

    let messageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, message: event.target.value, state: State.Normal })
    }

    let commitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, commit: event.target.value, state: State.Normal })
    }

    let randomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, random: event.target.value, state: State.Normal })
    }

    let commit = () => {
        let random = randomBytes(20).toString('hex')
        setState({ ...state, state: State.Normal, random, commit: createHash('sha1').update(state.message + random).digest('hex') })
    }
    let open = () => {
        let ok = createHash('sha1').update(state.message + state.random).digest('hex') == state.commit
        setState({ ...state, state: ok ? State.Success : State.Fail })
    }

    return (<Box>
        <TextField
            color={stateToColor(state.state)}
            fullWidth
            value={state.message}
            onChange={messageChange}
            margin="normal"
            label="Message"
            focused={stateToFocused(state.state)}
        />
        <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />} alignItems="center"
            justifyContent="center">
            <Button variant="outlined" onClick={commit}>Commit</Button>
            <Button variant="outlined" onClick={open}>Open</Button>
        </Stack>
        <TextField
            color={stateToColor(state.state)}
            fullWidth
            multiline
            onChange={commitChange}
            value={state.commit}
            margin="normal"
            label="Committment"
            focused={stateToFocused(state.state)}
        />
        <TextField
            color={stateToColor(state.state)}
            fullWidth
            multiline
            onChange={randomChange}
            value={state.random}
            margin="normal"
            label="Randomness"
            focused={stateToFocused(state.state)}
        />
        {stateToText(state.state)}
    </Box>)
}

