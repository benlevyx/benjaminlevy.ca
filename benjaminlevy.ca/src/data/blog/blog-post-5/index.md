---
category: 'blog'
cover: './cover.jpg'
title: 'How to make your own election prediction scam'
description: 'Political scientists hate this simple trick!'
date: '2022-12-22'
tags: ['statistics', 'politics', 'elections']
published: false
---

*In part 1, I wrote about how to evaluate whether a single election forecaster is credible based on some simple statistical tools. If you haven't read it, I highly recommend you at least skim it [here](../blog-post-4).*

To recap, if a newspaper writes a profile of an election forecaster who correctly predicted 5 out of the last 6 elections, and who is claiming to know who will win the next election, what are they really saying? From a statistical perspective, it is something like:

- An election is not a fundamentally random process: it is possible to predict an election outcome, given the right model
- This forecaster's model should be trusted, since the likelihood of being right that many times due to chance is very small
- We should therefore trust this forecaster's prediction that the election outcome will go a certain way

## The Problem of Silent Evidence

This argument works just fine if we are talking about single forecaster, but there is a big glaring problem that this analysis misses, something that [Nassim Nicholas Taleb](https://twitter.com/nntaleb) refers to as the "problem of silent evidence". Briefly, this refers to the effect where we ignore or are otherwise unaware of failures, and pay attention only to successes when we make decisions. For example, this was a problem in the recent mania surrounding cryptocurrencies, where low-information retail investors would see the huge sums being made by crypto influencers and want to invest their own money, ignoring the significantly larger number of people who lost their money on failed NFT projects or worthless coins. This was also a big cause of the ["replicability crisis"](https://compass.onlinelibrary.wiley.com/doi/full/10.1111/phc3.12633) in psychology, where negative results went unpublished while positive results were accepted by journals, leading to a situation where the scientific record was heavily skewed in favour of positive results, even though there were lots of negative results that could have contradicted some of those studies.

## The Data-Generating Process

Why does the problem of silent evidence matter in the case of election forecasting? Because we need to think more comprehensively about our *data-generating process* if we want to fully understand how likely it would be to forecast 5 out of 6 elections correctly. What is a data-generating process? Essentially, it is a story we tell about how the data that we observe came to be. It can be as simple as "John flipped a fair coin 6 times in a row", as complex as a hierarchical, multi-level model with partial pooling, or beyond.

What story can we tell about our election forecasters? Well, the first thing to notice is that even though the New York Times is only covering a single forecaster, Prof. Lichtman, we know from experience (and even the article itself) that Prof. Lichtman is far from the only election forecaster in the world. There many (potentially *very* many) people making election forecasts and publishing those claims.

Why does it matter that other people are also making election claims? Recall in [part 1](../blog-post-1) how we calculated the probability of calling 5 out of the last 6 elections as 1 in 10. Well, if we have, say, 100 people making election forecasts out in the world, we should be entirely unsurprised if 10 of them correctly call 5/6 elections, even if their models are nothing more than coin flips. It should therefore be quite easy for the New York Times to find such a person, especially if they are promoting their historical success far and wide.

## How to create your very own forecasting scam

Let's take a brief detour from politics and talk about the stock market. In his book *Fooled by Randomness*, Nassim Nicholas Taleb (again) details the following situation: imagine you have 10,000 stock portfolio managers working in a very peculiar stock exchange where whether each one makes money in a given year is determined by a coin toss: if heads, they make $10,000, if tails, they lose $10,000. In the first year, roughly 5,000 will be up, and 5,000 will be down. In the second year, half of 5,000, so 2,500, will have made money twice in a row. By the end of the fifth year, we would expect 312.5 (so, 312-313) managers to have made money all 5 years in a row. If you were to evaluate these managers at the end of 5 years, but with no knowledge of the data-generating process or how many other managers failed to make money year after year, you might be convinced that these are truly exceptional stock-pickers, and that you should buy whatever stocks they tell you to!

If you wanted to, you could easily simulate this process to create a stock-picking scam:

1. Send out 100,000 emails to different people claiming that you have a foolproof way to determine whether a given stock will go up or down the next day, and that you will prove it over the next week. You pick a random stockand for half of the emails, you say it will go up, while for the other half of the emails, you say it will go down
2. The next day after observing which way the stock went, send out a second email only to the emails where you were correct. Once again, splitting 50/50: in 25,000 emails, you claim your randomly picked stock will go up, while in the other 25,000, you claim it will go down
3. Rinse and repeat until you have made 7 predictions.

By the end of a week, roughly 780 people should believe you are a stock guru with unfathomable wisdom and will entrust their retirement savings to you. Why wouldn't they? The chances of you getting 7 stock picks correct in a row are less than 1%!

Now imagine this same effect, but for political forecasters. If we assume that there are, say, 10,000 people making political forecasts, and that their models are no more sophisticated than a coin flip, then we would expect that more than 150 would have correctly predicted the last 6 elections in a row. It should be trivial for the New York Times, or any other journalistic organization for that matter, to find a supposed election guru to write a profile on. However, due to the story we have told about the possible data-generating process, there is no good reason to believe that any of these individual forecasters should be believed, simply because they got lucky in the last 6 elections.

## Don't wait... simulate!

When it comes to statistics, I always find that directly simulating results from the data-generating process in order to recreate the observed data is the best way to understand the connection between the story we tell about the world and the numbers we compute to describe it. Here is a small app I've put together that allows you to see how, from a simple set of assumptions about the number of forecasters, probability of being right, or several other parameters, you can create all kinds of different worlds:

*App coming soon*