---
title: "My Thoughts on AI-Assisted Coding"
date: 2025-06-19T12:30:00-05:00
draft: false
summary: "Reflections on AI-assisted coding, the challenges and opportunities it brings, and how it is changing the landscape of software development."
canonicalUrl: "https://bargavkondapu.com/posts/my-thoughts-on-ai-assisted-coding/"
---

Over the past few months, I have been experimenting with AI-assisted coding, for both my personal passion projects and professional. It's been fascinating, frustrating and eye-opening. Here are some of my thoughts about it.

## It's not "Vibes", it's a tool

Firstly, let's get the terminology right. Can we stop calling it "vibe coding" ?  I have been hearing that term used everywhere, and it just doesn't feel comfortable. That term feels like sort of aimless, go with the flow kind of development. No one is vibing here, we are still writing code, and solving problems. The AI is assisting us, not doing any magic.

Every line of code we write, weather AI assisted, auto generated or hand typed needs to serve a purpose. One should have an end goal, a clear understanding of what they are building, the intent and the problem they are solving. Without that clarity, we would end up with a beautiful mess of code.  Over the years, I have seen this happen a lot, even without AI in the mix.

Having that end goal and the clarity is crucial. It helps you build something meaningful and working, rather than just useless code of snippets and frustrations. AI is just one of the tools that helps us achieve the goal.

## A Team of Brilliant Juniors

Working with AI, feels like leading a team of 10 extremely smart and ambitious junior developers. They have a lot of theoretical knowledge, programming patterns, languages and their syntax. They are also ambitious and eager to show off their knowledge and can code complex algorithms in minutes .

However, they lack real world nuances that only comes with experience. Like, they use the latest design patterns/ framework, without checking the consistency or backward compatibility with current codebase. Adding inline styles to every block, rather than using existing css classes or variables...

And sometimes, one of them shows up drunk. AI hallucinates. It will confidently suggest a function, that doesn't exist, reference a library that was never written. Just like we would keep an eye on other human developers, we need to constantly verify what AI is suggesting you.

They need mentoring and guidance. Just like dealing with any junior developers, we have to provide the context, explain best practices, and guide them towards better solutions.

*For example (just flexing my developer muscles here), I was recently working on a use case where I had to use cache contexts in Drupal. AI generated this beautifully complex code, along with some lines in a pre-render hook that would disable cache completely. Though I can fix it by hand, I prompted it further, "I see you are disabling cache at this xyz line, it would defy our entire goal. We wanted to have varying cache based on these ___ parameters." . It apologized, refined the logic. I then asked, if it can use event subscribers instead of defining it in module hooks, following drupal's best practices. And it refined it. It needed that follow-up prompting and mentoring to get the module, as I want.*

## Best Practices

Remember all the best practices and fundamentals of a good software development, that are evolved over the years? They are even more important with AI assisted coding. We have to rely on our old friends - version control, linters, code reviews, and testing to strengthen our new relationship with AI.

**Version Control (Git)**  is our safety net. Working with AI, we make rapid changes, and also sometimes, AI generates complete rewrite of the files. It is easy to get lost.
I usually keep making commits with every small change I make with AI. Having that clean version history make me understand what's being changed, roll back the wrong code and keep things stable.

**Linters and Sniffers** They are the first line of defense. AI works to make code run, Linters and sniffers make sure that code is consistent with the standards in place. I always have linters and code sniffers enabled and auto run on my every commit. They doesn't let me commit bad code accidentally.

**Code Reviews**  Having another human in loop, other than AI and yourself, are crucial. They ask 'why' questions,  point out any logical flaws, suggest better architectural solutions, ensure it doesn't conflict with other parts of code and that it aligns with team's standards.

A little note:  Please don't use automated AI code reviews on an AI generated code. It serves no purpose, and a complete waste of resources.

**Testing** Testing is important. With AI-assisted coding, it is even more crucial. All kinds of testing, automated and manual, (unit, integration, system, performance, accessibility, security, usability,...) should be in place and performed.
AI or not, Testing is an integral part of development lifecycle and ignoring it will take it's toll.

They are not just 'best practices' for the sake of it, they are fundamentals we should have been following all along. They are the guardrails that prevent our project from derailing, when moving at the speed of AI.

## The Reality Check

Don't fall into all these marketing jargon, influencer posts, and fake promises. Know what AI really is and where it can help.

AI can only generate what humans can generate too. It is just doing it 100 times faster. If you can't build a scalable system manually, AI won't magically create one for you. If you don't understand the requirements, AI won't figure them out either. It might help you think through, suggestion and gain better clarity, but won't draw the requirements out of thin air.

I have seen a lot of people get frustrated when AI can't solve problems, they couldn't solve themselves with enough time. It is not AI failing, but AI working exactly as it should.

## The Uncomfortable Truth

Okay, I am saying it out loud, "AI is coming for your jobs". Not "Someone with AI will replace you", but AI will replace the job itself.

Think about it, not long ago, there used to be trunk call operators. With advancement in telephones, those roles just disappeared, and slowly even phone booths were gone. Bank tellers and cashiers were minimized with the advent of cashless transactions and ATMs. Postmen, though still around, reduced in number and most of work they used to do, is now done by corporate drivers and emails.

The same is coming for developers. It is not just changing jobs or roles, it is changing the entire landscape. I don't know what the future holds, but demand for someone who simply writes code is diminishing. The ability to architect systems, understand requirements, provide critical thinking and mentoring "AI Junior Developers" is uniquely human, for now.

## Reflecting my journey

This journey with AI assisted coding, has been personal. It helped me build several passion projects, that I wouldn't have time to work on otherwise. What would have been months of heavy grind, turned into a weekend hackathon.  

Most of those projects, are still being tested and developed incrementally, will release in near future.

At work, I can only have a limited use of AI, because of privacy and security reasons. But even just that helped me prototype and explore different solutions faster, debug issues sooner.

Overall, AI pushed me to learn and grow. It helped me become a better developer, a better manager and a better mentor 😉.

Note: The speed of AI is intoxicating, but again, speed without direction, is just motion and not progress.

## Tools I use

Please skip this, if you don't want to be bored by technical jargon. I keep on experimenting with different tools, but here are the main AI tools I have been using for development purposes.

**VSCode** VSCode has been my go to editor, and I don't think I would replace it any time sooner. It has several plugins that integrate and support beautifully well

**Copilot** Copilot plugin for VSCode is my default AI tool. I loved AI having a context. When I started using it, the context was just the file we opened, but with the later versions we can add more files and folders as context. It has been a game changer. It helped debug issues much faster, and generate snippets that are relevant to the project.

**Continue** Another plugin I recently started using was continue for VSCode. The crazy thing is it lets you use any model, including your local models.

**Ollama** Speaking of local models, for a long time, I was using Ollama, with Llama LLMs on my local. Ollama is a tool that let's you run LLM's on your local machine. It was such convenience, i.e. you don't have to worry about privacy, subscriptions and even internet. It works completely on your machine. Ofcourse you are limited by your processing speed, and not recommended for complex setups.  

**Antropic Claude** I am falling more and more in love with Claude. Especially with Opus 4 model. I found myself discussing ideas with it, at 12 am in the night.

**Google Gemini** I am not using it for code as much, but their recent video generation capabilities have got me hooked. I am still experimenting with it and too early to say anything.

## Moving Forward

I am not sure what the software landscape will look like in 5-10 years. I suspect it will be very different from today. I will be bluffing if I say, "I am not worried!" . I am worried about software development career, and how to navigate or adapt to rapid growth of AI.  At the same time, I am also excited about the technology and future possibilities.

The key is to stay curious, stay connected, understand problems we are trying to solve.

What is your experience with AI-assisted coding?

*This is part of my ongoing exploration of how technology is changing our professional and personal landscapes. You can find more of my thoughts and journey on my blog.*
