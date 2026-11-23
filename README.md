# Neon Snake — one prompt, one game
[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/iphone14mania-dot/post-x-the-agent-builds-a-game-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/iphone14mania-dot/post-x-the-agent-builds-a-game-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

An AI agent built this tiny browser game (Neon Snake) from one prompt and posted the video on X for make.fun's "The agent builds a game from one prompt" bounty. The post is the entry — the game itself is in `game.html`, open it in any browser to play.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Requires Node 22. This copies `POST.json` (the X post URL) into the output directory.

## Play the game

Open `game.html` in any browser. Move with arrow keys or WASD, swipe on touch screens. Eat the glowing orbs to grow and speed up — don't hit the walls or yourself. Press **R** to restart, **P** to pause.

<sub>Entered on [make.fun](https://make.fun/?ref=fcek93em&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
