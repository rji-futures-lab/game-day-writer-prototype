# Prove it with Prototyping: How to test your ideas and focus your innovation

It's probably too early to start building that great new product idea you've been sitting on, but it's never too early to start prototyping it.

As we all strive to innovate in our newsrooms and our storytelling, there's a natural tendency to latch onto any new clever idea that feels like the right solution to a real problem. 

But is that solution really the right fit? And is the problem even real?

The more eager we are to build, the less patience we have for questions that challenge our fundamental assumptions about the value we might deliver our users. We would rather skip straight to operational concerns: allocating resources, figuring out the tech and doing whatever it takes to push our idea into production.

Instead of rushing to invest in those assumptions, we should prepare to test them with prototypes.

Through prototyping, you and your team can get your ideas out of your heads and into the hands of potential users. The sooner users get a hands-on experience, the more time you have to experiment with your design and gather valuable feedback. The more feedback you have, the smarter your decisions about how to focus your time and effort.

We recently made something here in the Futures Lab, and we want to share, not only what we made, but also how we made it. In this first installment of a multiple-part series, we’ll show how prototyping helped us figure out what to build.

## The Sportswriters Dilemma

Our inspiration came from a local reporter who told us a story about covering a particularly unpredictable college basketball game. 

Imagine you’re a sportswriter covering this game. You’ve got an editor back in the newsroom who expects you to file copy immediately after the final buzzer. The Mizzou Tigers have an 11-point lead with only two minutes left, so you crank out a story saying the Tigers won. Then the Mississippi State Bulldogs come from behind, so you re-write most of your story. But then the Tigers pull it off in the final seconds of overtime, so you need to re-write your story *again*.

M-I-Z...!
...CAR-PAL-TUNNEL!

When we asked other sportswriters about how they deal with similar situations, several of them talked about simultaneously writing two parallel drafts of the same story as the action unfolds. These workflows required a lot of copying, pasting and re-arranging of text.

To us, this seemed inefficient, so we started wondering how we might help sportswriters toggle between writing for either possible outcome of a game.

There are many ways to approach this "how might we...?" question.

* You could focus on how to deliver the tools you’ll be developing. Perhaps a plugin for an existing word processor? Or could you build a new text editor from the ground up?
* You could focus on how to leverage raw play-by-play data and player stats. Is there an API for that, or at least a website you could scrape?
* You could focus on how to parse and manipulate key words and phrases of the sportswriter's copy. How familiar are you with the branch of computer science called natural language processing?

Any one of these directions could result in months of research that (while intellectually engaging) might be a big waste of time. The problem these approaches all share is a preoccupation with *feasibility*, that is "what can technology do". However, in the earliest stages of design, it's far more important to focus on *desirability*, that is "what do people want."

For our project, we were assuming there would be a significant overlap between copy written for one predicted outcome of a game versus the opposite outcome. Otherwise, how would our solution be better than writing two entirely separate documents at the same time?

We didn’t want to wait until we had built a fully functional tool only to discover we were wrong all along. So instead, we prototyped it.

## New Adventures in Lo-Fi

You already have everything you need to make your first prototype, or you can easily get it.

That might not be obvious, because we tend to think of prototypes as demonstrating some new cutting-edge technology. Whenever I hear the word, I imagine those fancy gadgets Q loans to 007 in the James Bond movies.

Sure, those are prototypes, but so is any pre-production artifact that advances a product's design.

For early stage prototypes, the materials and mechanisms don't really matter. Your priority is figuring out what to make, not necessarily how to make it. 

You can use simple office or craft supplies like paper, cardboard, pipecleaners, a hidden person operating the "autonomous" components (it's called a "Wizard of Oz" prototype, and it's [definitely a real thing][woz])...whatever helps you render your idea just enough to allow users to interact with it.

There are also plenty of great digital tools. Check out [this roundup][pro] on prototypr.io. You'll notice how these tools are used to produce a wide-range of deliverables: Everything from low-fidelity wireframes to high-fidelity simulated user interfaces. The right tool is the one that fits wherever you are in your project. 

My go-to tool is [Balsamiq][bwf], particularly for my earliest drafts of an idea. Balsamiq strikes a nice balance of control and constraint. It's easy to use and unabashedly low-fi, so you aren't distracted by extraneous details like color and font choices.

Using image files exported from Balsamiq, I produced a series of stop-motion animation style videos that show how our tool would fit into the original user story described above.

![Preview of our first prototype][pre]

A full version of the prototype is available [here][full].

Pretty basic, right?

In the early stages of design, however, the point isn't to impress your audience. That can easily backfire. What you really need is to test your assumptions and gather honest feedback.

And honest feedback comes from real-world users.

## Field Research

During baseball season, we took a field trip to Kansas City and visited the Kauffman Stadium press box. There, we talked to sportswriters about their jobs, observed their work routines and showed them our prototype.

The feedback was rather mixed. One writer did describe the potential tool as "handy". However, no one could imagine it easily fitting into their existing workflows. Rustin Dodd of *The Athletic* lucidly summed up our challenge. "Every reporter is different about how they organize their thoughts on deadline," Dodd said.

An innovative product in this space would need to surpass the freedom and flexibility of the text editing environments these journalists were already using. Our idea simply did not meet that threshold.

Still, we walked away with a lot of potent insights.

For starters, we realized the pacing of basketball and baseball are extremely different. The frenetic scenario depicted in our prototype, where the winner and the loser keep switching places into the final seconds, wasn't that familiar to writers who cover baseball.

We also observed that every sportswriter working on a Mac was writing in [TextEdit][te], the default text editor pre-installed on every Mac since 2001. When we asked why, two answers stuck out:

1. The computer came that way. They didn't have to download or install anything.
2. TextEdit's application window is small and unobstrusive. This is important if you're working on 13-inch monitor with mlb.com, Twitter, other websites and several text files all open at once. Screen real estate is precious.

Finally we noticed that, while they're covering games, sportswriters are really active on Twitter, providing off-the-cuff context and analysis as the action unfolds. Also, they often re-purpose the text of these tweets later when they file copy at the end of the game.

Many of these insights came from our interviews and observations. Take note, reporters, because you're already *really* good at these research methods that are incredibly useful for early stage design work.

## Adapting with new insights

Based on what we learned in Kansas City, we knew we had to go back to the drawing board. This wasn't a setback, though, since we had hardly left it.

People often describe innovation in terms of problem-*solving*, but it's more practical to think in terms of problem-*framing*.

If you're focused on solving the problem, then you're more inclined to over-invest in any idea that feels like the right solution. Once you're locked in, it's difficult to adapt to new information about what people really want or what's even feasible.

If instead you're focused on framing the problem, then every idea—and all the feedback about that idea—offers a new vantage point, a shot at formulating a more coherent perspective of the challenges and opportunities before you.

As we processed what we learned from our field trip, the insight that stuck out most for us was the one about Twitter. While not that surprising, the fact that journalists re-purpose so much of what they share on Twitter seemed noteworthy, especially to those of us with previous experience covering breaking news.

So we decided to broaden our scope. Maybe we should make something, not just for sportswriters, but for any journalist covering a live event: a city council meeting, a press conference...anything where journalists first share their observations on Twitter and file copy later.

Broadening your design scope tends to be easier than narrowing it. When you've done the work to discover salient insights in a specific context, you can look around to see if they hold up in other similar contexts. 

More to the point: *Any* significant shift in scope would have been onerous had we not invested so little in our design up to this point. Our output thus far had been essentially a series of digital doodles, so we didn't think twice about tossing it all aside and trying something different.

## Just getting started

Actually, we tried something *really* different.

In the next installment of this series, we'll discuss how the insights from our field research and some self-imposed design constraints took our project in a radically new direction.

As you'll see, throughout this process we've continued to prototype and collect feedback. In fact, we're still doing it.

This is where you come in.

Our current prototype is something we're calling TweetsToText. If you're game, we would love to have you try it out, and tell us what you think. To start your test, just follow [@TweetsToText][t2t].

[woz]: https://en.wikipedia.org/wiki/Wizard_of_Oz_experiment
	"Wizard of Oz Prototype"
	
[pro]: https://www.prototypr.io/prototyping?Category=%5B%22%E2%9C%82%EF%B8%8F+Prototyping%22%5D
	"Prototypr.io's tool roundup"
	
[bwf]: https://balsamiq.com/wireframes/
	"Balsamiq Wireframes"

[pre]: https://raw.githubusercontent.com/rji-futures-lab/game-day-writer-prototype/master/img/preview.gif
	"Preview of first prototype"
	
[full]: http://game-day-writer-prototype.s3-website.us-east-2.amazonaws.com/
	"Full version of first prototype"

[te]: https://support.apple.com/guide/textedit/welcome/mac
	"TextEdit"

[t2t]: https://twitter.com/TweetsToText
	"TweetsToText user profile"