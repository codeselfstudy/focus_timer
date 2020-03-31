# Model Notes

Some ideas about how to store the data.

## Timers

A timer has an `id` which makes up its URL.

A timer has an owner who can control the timer.

Timers have one or more `block`s.

Timers can be set to repeat or expire when they finish working through all of the `block`s.

A `block` can be a type of either `focus` or `break`.

A block has a length.

The start and stop times aren't as important as the length.

An event can either be a `start` or `stop`. A `stop` performed while `elapsedTime` is less than the `unit`'s `length`, is considered `paused`.

A timer can expire when the blocks are finished or it can repeat (possibly by appending the existing blocks on the end so that they are not destroyed?).

```javascript
const timer = {
    "createdAt": 1234567890,
    "isActive": true,
    "isRunning": true,
    "owner": "users/3728173921",
    "currentBlock": 0,
    "shouldRepeat": true,
    "blocks": [
        {
            "elapsed": 627,
            "length": 1500,
            "order": 0,
            "type": "focus"
        },
        {
            "elapsed": 0,
            "length": 300,
            "order": 1,
            "type": "break"
        }
    ]
};
```

