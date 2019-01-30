# Prototype Early, Prototype Often

It's probably too early to start building that great new product idea you've been sitting on, but it's never too early to start prototyping it.

That's a key takeaway I picked up from a [bootcamp](https://medium.com/matter-driven-narrative/a-lot-more-experiments-open-matter-e3088db96fb) I attended in May 2018 focused on design thinking. The bootcamp was led by Matter VC, in partnership with Google News Lab, and was hosted here at RJI.

Design thinking is a popular framework for innovation that emphasizes prototyping to get your product idea out of your head and into the hands of potential users.

The sooner users get a hands-on experience, the more time you have to experiment with your design and gather valuable feedback. The more feedback you have, the smarter you'll be in deciding how to focus your time and effort.

Here's how the Futures Lab recently used prototyping to help us figure out what we actually wanted to build.

## The Sportswriters Dilemma

At the outset, we wanted to make something useful for sportswriters who need to file copy on tight deadlines.

Our initial premise was that any game will end in one of two outcomes—either the home team will win or the away team will—even if the outcome isn't known until the final seconds of gameplay.

When we talked to sportswriters about these scenarios, they often described how they simultaneously write two parallel drafts of the same story as the action unfolds. These workflows required a lot of copying, pasting, pushing text to the bottom of document and moving it back to the top as needed.

To us, this seemed inefficient, so we started wondering how might we help sportswriters switch back and forth between writing for one game outcome or the other?

There are many ways to approach this "how might we...?" question:

* You could start by tinkering with plugins for popular word processing tools like Google Docs.
* You could write a few generic gameday story templates that writers can fill in, [Mad Libs](http://www.madlibs.com/)-style.
* You could dive into the features of an open source natural language processing/generation toolkit.
* You could build a database of gameday stories and train an algorithm to write new gameday stories, based on raw play-by-play data and player stats.

Any one of these directions could result in months of research that (while intellectually engaging) would likely be a big waste of time. The problem these approaches all share is a preoccupation with *feasibility*, that is "what can technology do". However, in the earliest stages of developing a new product, it's far more important to focus on *desirability*, that is "what do people want."

## "Paper" prototyping

One common misconception about prototypes is that they require custom, cutting-edge tech. For example, I tended to think of prototypes as those fancy gadgets 007 picks up whenever he pays a visit to Q in any installment of the James Bond franchise.

However, a prototype can be any pre-production artifact that advances your design. This includes a wide-range of deliverables, everything from low-fidelity wireframes to high-fidelity simulated user interfaces.

You can build it with any material you like: Paper, cardboard, pipecleaners, a hidden person operating the "autonomous" components (it's called a "Wizard of Oz" prototype, and it's [definitely a real thing](https://en.wikipedia.org/wiki/Wizard_of_Oz_experiment))...whatever helps you materialize your idea and gives users something to with which they can interact.

For our project, we created wireframes using [Balsamiq](https://balsamiq.com/wireframes/), then compiled the image files into stop-motion animation style videos.

![Preview of prototype](https://github.com/rji-futures-lab/game-day-prototype/raw/master/img/preview.gif)

A full version of the prototype is available [here](http://game-day-writer-prototype.s3-website.us-east-2.amazonaws.com/).

## Field Research

Granted, our first prototype was a little rough. However, it allowed us to test key assumptions embedded in our idea. Specifically:

* Are there really just two versions of a single gameday story?
* Is there really a lot of overlap between these two versions of the story? (Otherwise, why not just switch between two completely separate documents?)

To answer those questions, we took a field trip to Kansas City during baseball season and visited the Kauffman Stadium press box. We talked to sportswriters about their jobs, observed their work routines and showed them our prototype.

The feedback was rather mixed. One writer described the potential tool as "handy". However, no one could imagine it easily fitting into their existing workflows. Rustin Dodd of *The Athletic* summed up our challenge quite lucidly. "Every reporter is different about how they organize their thoughts on deadline," Dodd said.

An innovative product in this space would need to surpass the freedom and flexibility of the text editing environments these journalists were already using. Our idea simply did not meet that threshold.

Still, we walked away with a lot of potent insights.

For starters, we realized the pacing of basketball and baseball are extremely different. The frenetic scenario depicted in our prototype, where the winner and the loser keep switching places into the final minutes, wasn't that familiar to writers who cover baseball.

We also observed that every sportswriter working on a Mac was writing in TextEdit, the default text editor pre-installed on every Mac since 2001. When we asked why, two answers stuck out:

1. The computer came that way. They didn't have to download or install anything.
2. TextEdit's application window is small and unobstrusive. This is important if you're working on 13-inch monitor with mlb.com, Twitter, other websites and several text files all open at once. Screen real estate is precious.

Finally we noticed that, while they're covering games sportswriters, are really active on Twitter, providing off-the-cuff context and analysis as the action unfolds. They often re-purpose the text of these tweets later when they file copy at the end of the game.

Many of these insights came from our interviews and observations. Take note, reporters, because you're already *really* good at these research methods that are incredibly useful for early stage design work.

## Ideate and Iterate

Basically, we needed to go back to the drawing board. This was hardly a setback, though, since we never really left the drawing board.

The insight that stuck out most for us was the one about Twitter. While not that surprising, the fact that journalists re-purpose so much of what they share on Twitter felt important, especially to those of us with previous experience covering breaking news.

We decided to broaden our scope. Maybe we should make something, not just for sportswriters, but for any journalist covering a live event: a city council meeting, a press conference...anything where journalists first share their observations on Twitter and file copy later.

Broadening your design scope tends to be easier than narrowing it. When you've done the work to discover salient insights in a specific context, you can look around to see if they hold up in other similar contexts. 

The next key step that helped us adapt, rather counter-intuitively, was adding a design constraint: What if the entire user experience stayed in Twitter?

This choice wasn't arbitrary. As we discovered, journalists aren't especially eager to download new apps or figure out new user interfaces. Instead, maybe we could leverage the affordances of Twitter, which is already integrated into the workflows of many journalists.

At first, we called it "Magic Follower".

![Follow Magic Follower.](https://github.com/rji-futures-lab/game-day-prototype/raw/master/img/magic-follower-1.png)

We imagined it as of personal assistant that lived on Twitter. Reporters out covering live events would interact with it via direct message on Twitter, just as they might with a colleague back in the newsroom.

![Magic Follower will convert your tweets to text.](https://github.com/rji-futures-lab/game-day-prototype/raw/master/img/magic-follower-2.png)

The feedback we gathered from this new prototype was uniformly positive. That gave us the confidence we needed to actually start building it.

## Summing up

Often we think about innovation in terms of *problem-solving*, but it's more practical to think in terms of *problem-framing*.

If you're focused on solving a problem, then it's easy to over-invest in any idea that feels like the right solution. Once you're over-invested, adapting to new information about what people really want is difficult.

Instead, think of every product idea as a stepping stone that may take you closer to understanding the problem. Early in your project's lifecycle, you want to take leaps—even really big ones—before you lock in development plans.

Prototyping helps you make those early leaps by testing your intuitions against the real world. The feedback you gather from prototyping can help you refine your design while the stakes are low and your capacity to adapt is high. 

## To be continued...

Our idea and design continued to evolve as we built out. For one thing, we renamed to [TweetsToText](https://www.tweetstotext.io/) in order to provide more immediately clarity about what it does.

TweetsToText is in beta now, and we're looking for feedback from anyone willing to try it out.

In our next segment, we'll get down and nerdy with details about how we made TweetsToText using [Twitter's Account Activity API](https://developer.twitter.com/en/products/accounts-and-users/account-activity-api.html).