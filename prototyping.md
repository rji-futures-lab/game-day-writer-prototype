# Prove it with Prototyping: How to test your ideas and focus your innovation

As we all strive to innovate in our newsrooms and our storytelling, there's a natural tendency to latch onto any new clever idea that feels like the right solution to a real problem.

But is that solution really the right fit? And is the problem even real?

The more eager we are to build, the less patience we have for questions that challenge assumptions about what our audiences want or need. We would rather skip straight to figuring out the tech and doing whatever it takes to push our idea into production.

There's a better approach.

Through prototyping, you and your teammates can get ideas out of your heads and into the hands of potential users. The sooner users get a hands-on experience, the more time you have to gather feedback and experiment with your design. You can then make smarter decisions about how to focus..

We recently made something here in the Futures Lab, and we want to share how we made it. In this first installment of a multiple-part series, we'll show how prototyping helped us figure out what to build.

## The Sportswriter's Dilemma

Our inspiration came from a local reporter who told us about covering a particularly unpredictable college basketball game.

Imagine you're the sportswriter covering this game. You've got an editor back in the newsroom who expects you to file copy immediately after the final buzzer. The Mizzou Tigers have an 11-point lead with only two minutes left, so you crank out a story saying the Tigers won. Then the Mississippi State Bulldogs come from behind, so you re-write most of your story. But then the Tigers pull it off in the final seconds of overtime, so you need to re-write your story _again_.

M-I-Z...!
...CAR-PAL-TUNNEL!

Several other sports writers described writing two parallel drafts of the same story as the action unfolds. These workflows required a lot of copying, pasting and rearranging of text.

This seemed inefficient, so we started wondering how we might help sportswriters toggle between writing for either outcome.

There are many ways to approach this "how might we...?" question.

*   You could focus on how to deliver the tools you'll be developing. Perhaps a plugin for an existing word processor? Or a new text editor built from the ground up?
*   You could focus on how to leverage raw play-by-play data and player stats. Is there an [API](https://medium.freecodecamp.org/what-is-an-api-in-english-please-b880a3214a82) for that, or at least a website you could scrape?
*   You could focus on how to parse and manipulate key words and phrases of the sportswriter's copy. How familiar are you with the branch of computer science called natural language processing?

Any of these could result in months of research that (while intellectually engaging) might be a big waste of time. The problem is a preoccupation with _feasibility_, that is, "what can technology do." However, in the earliest stages of design, it's far more important to focus on _desirability_, that is, "what do people want."

For our project, we were assuming there would be a significant overlap between copy written for one predicted outcome of a game versus the opposite outcome.

We didn't want to wait until we had built a fully functional tool only to discover we were wrong all along. So instead, we prototyped it.

## New Adventures in Lo-Fi

You already have everything you need to make your first prototype, or you can easily get it.

We tend to think of prototypes as demonstrating some new cutting-edge technology. Whenever I hear the word, I imagine those fancy gadgets Q loans to 007 in the James Bond movies.

But for early stage prototypes, the materials and mechanisms don't really matter. Your priority is figuring out what to make, not necessarily how to make it.

You can use simple office or craft supplies like paper, cardboard or pipe cleaners. You could have a hidden person operating the seemingly automatic components (it's called a "Wizard of Oz" prototype, and it's [definitely a real thing](https://en.wikipedia.org/wiki/Wizard_of_Oz_experiment)) … whatever helps you render your idea just enough to allow users to interact with it.

There are also plenty of great digital tools. Check out [this roundup](https://www.prototypr.io/prototyping?Category=%5B%22%E2%9C%82%EF%B8%8F+Prototyping%22%5D) on prototypr.io. Some are better for producing low-fidelity wireframes. Others can create high-fidelity simulations of user interfaces. The right tool is the one that fits wherever you are in your project.

My go-to tool is [Balsamiq](https://balsamiq.com/wireframes/), particularly for my earliest drafts. Balsamiq strikes a nice balance of control and constraint. It's easy to use and unabashedly low-fi, so you aren't distracted by extraneous details like color and font choices.

Using image files exported from Balsamiq, I produced a series of stop-motion animation style videos that show how our tool would fit into the original user story described above.

![Preview of our first prototype](https://raw.githubusercontent.com/rji-futures-lab/game-day-writer-prototype/master/img/preview.gif)

A full version of the prototype is available [here](http://game-day-writer-prototype.s3-website.us-east-2.amazonaws.com/).

Pretty basic, right?

The point isn't to impress your audience. That can easily backfire. What you really need is to test your assumptions and gather honest feedback.

And honest feedback comes from real-world users.

## Field Research

During baseball season, we took a field trip to the Kauffman Stadium press box in Kansas City. There, we talked to sportswriters about their jobs, observed their work routines and showed them our prototype.

The feedback was mixed. One writer described the potential tool as "handy". However, no one could imagine it easily fitting into their existing workflows. Rustin Dodd of _The Athletic_ lucidly summed up our challenge: "Every reporter is different about how they organize their thoughts on deadline."

An innovative product in this space would need to surpass the freedom and flexibility of the text editing tools these journalists were already using. Our idea simply did not meet that threshold.

Still, we walked away with a lot of potent insights.

For starters, we realized the pacing of basketball and baseball are different. The frenetic scenario depicted in our prototype, wasn't that familiar to writers who cover baseball.

We also observed that every sportswriter working on a Mac was writing in [TextEdit](https://support.apple.com/guide/textedit/welcome/mac), the default text editor pre-installed on Macs since 2001. When we asked why, two answers stuck out:

1.  They didn't have to download or install anything.
1.  TextEdit's application window is small and unobtrusive. This is important if you're working on 13-inch monitor with mlb.com, Twitter, other websites and several text files all open at once.

Finally we noticed that, while they're covering games, sportswriters are really active on Twitter, providing off-the-cuff context and analysis as the action unfolds. Also, they often re-purpose the text of these tweets when they file copy at the end of the game.

We collected these insights through the same observational and interviewing techniques journalists already know how to do. What counts as good reporting can also pass for good user research.

## Adapting with new insights

We knew we had to go back to the drawing board. This wasn't a setback, though, since we had hardly left it.

People often describe innovation in terms of problem-_solving_, but it's more practical to think in terms of problem-_framing_.

If you're focused on solving the problem, then you're more inclined to over-invest in any idea that feels like the right solution. Once you're locked in, it's difficult to adapt.

If instead you're focused on framing the problem, then every idea — and all the feedback about that idea — offers a new vantage point, a shot at formulating a more coherent perspective of the challenges and opportunities before you.

As we processed what we learned from our field trip, the fact that journalists re-purpose so much of what they share on Twitter seemed noteworthy.

So we decided to broaden our scope. Maybe we should make something, not just for sportswriters, but for any journalist covering a live event: a city council meeting, a press conference — anything where journalists first share their observations on Twitter and file copy later.

Broadening your design scope tends to be easier than narrowing it. When you've done the work to discover salient insights in a specific context, you can look around to see if they hold up in other similar contexts.

More to the point: _Any_ significant shift in scope would have been onerous had we not invested so little in our design up to this point. Our output thus far had been a series of digital doodles, so we didn't think twice about tossing it all aside and trying something different.

## Just getting started

Actually, we tried something _really_ different.

In the next installment of this series, we'll discuss how the insights from our field research and some self-imposed design constraints took our project in a radically new direction.

As you'll see, throughout this process we've continued to prototype and collect feedback. In fact, we're still doing it.

This is where you come in.

Our current prototype is something we're calling TweetsToText. If you're game, we would love to have you try it out, and tell us what you think. To start your test, just follow [@TweetsToText](https://twitter.com/TweetsToText).