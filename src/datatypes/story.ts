export interface StoryText {
    text: string;
    locneeded: number;
}

export const story: StoryText[] = [
    {
        text: "Welcome to Idle Hackathon! You are attending your first hackathon and have an idea to make a script to code for you. To get started, type a line of code in the text box.",
        locneeded:0
    },
    {
        text: "You can now write your first script! Click the +1 button to buy one. Scripts automatically produce 1 line per second.",
        locneeded:10
    },
    {
        text: `Feel free to play some "Codle" while you wait for your scripts to generate lines. If you get the word right, you get an increase to production!`,
        locneeded:40
    },
    {
        text: "You figure out that you can get your GPU to produce scripts for you. Save up 100 lines to buy one.",
        locneeded:80
    },
    {
        text: "You can buy upgrades by clicking the icons under the generator you want to upgrade. You unlock upgrades by manually buying generators so remember to keep buying them yourself!",
        locneeded:200
    },
    {
        text: "By looking into cloud services, you can now get them to make more virtual GPUs to power up your script generation.",
        locneeded:9000
    },
    {
        text: "After a long time doing all these optimizations yourself, you decide to create a startup in the middle of the hackathon. This lets your employees make cloud services for you!",
        locneeded:1000000
    },
    {
        text: "You have generated so much code that big startup incubators have gained interest in you. They can help found new startups.",
        locneeded:10000000000
    },
    {
        text: "This hackathon is going very well for you so you start to research Quantum technology.",
        locneeded:1000000000000
    },
    {
        text: "The hackathon is coming to an end but you are just on the cusp of figuring out how to implement Quantum technology.",
        locneeded:10000000000000
    },
    {
        text: "Finally! The moment is here to start up your new technology and get first place at the hackathon!",
        locneeded:100000000000000
    },
    {
        text: "Crash",
        locneeded:10000000000000000000000000000
    },
]