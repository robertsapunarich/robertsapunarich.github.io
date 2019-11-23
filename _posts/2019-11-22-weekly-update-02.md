---
layout: post
title:  Weekly Update 02
date:   2019-11-22
tags: life, reading, weekly update
categories: blog
---

I spent the bulk of this past week in Nashville for RubyConf. I arrived late Sunday night, and flew home Wednesday afternoon. Having attended RailsConf for two years, my coworkers and I decided to mix things up this year and check out RubyConf instead. As much as I’ve enjoyed RailsConf, RubyConf proved to be a refreshing experience. There was much discussion around the Ruby language with little reference to the Rails framework. In my experience, RailsConf tended to be high-level discussions of various technologies and how they can be integrated into Ruby on Rails. RubyConf, on the other hand, while still having a fair number of talks that touched more on the “soft skills” (we need a better term for those), also consisted of more technical deep-dives.

_Warning: technical babble follows_

For example, I learned that, depending on the data structure you’re working with, [writing to disk can actually be faster than writing to memory](http://rubyconf.org/program#session-883). How so? Turns out, when a program writes to a file (e.g. with something like `File.new`), Ruby actually delegates the file-saving task to the operating system, which then queues up the task to do later. Now, in something like a database, where you don’t want to lose any data if your program crashes, writing to disk occurs immediately. But, in Ruby’s case, writing to “disk” is in effect writing to memory, and proves to be more efficient. The talk explains the details much better than I could.
_End technical babble_

[Avdi Grimm](https://avdi.codes/) [shared about some painful personal experiences and how they might be applied to both life and software systems](http://rubyconf.org/program#session-864). If you don’t follow Avdi’s newsletter, I highly recommend subscribing. His denunciation of transactional thinking and incisive examination of our achievement-obsessed/goal-oriented culture was nearly biblical. 

[Colin Fulton actually got a Ruby implementation to run on an Apple II](http://rubyconf.org/program#session-857). They also put their slides on a floppy disk, which ran on a physical Apple II machine on stage.

[Sandi Metz](https://www.sandimetz.com/)’s keynote about how lucky we were to be at that conference was damn near prophetic. Her call for all present to use their skills and knowledge for good and to address systemic injustices was inspiring.

Finally, [my manager, Jon Druse, gave a talk!](http://rubyconf.org/program#session-878). He discussed how poor processes, cutting corners, and complex legacy systems led to “the worst catastrophe” of his career. Having been present for said catastrophe, I can attest to how painful and powerful a learning experience it was for our team.

I’ll be sure share links to these talks once they’re posted. 

- - - -

By the end of this year, I will have traveled five times since August alone. Some of it has been fun, some of it less so. I’m pondering travel for next year. Jen and I are committing to more fun, and less obligation. That might mean dialing back the conferences.

- - - -

It’s strange how the web has shaped my habits and expectations. The other day I was irked to discover that if I wanted to subscribe to more than 100 RSS feeds with [The Old Reader](https://theoldreader.com/users/sign_in), I would have to upgrade to a paid subscription. Similarly, I was surprised that [Feedbin](https://feedbin.com/) also charges (something that shouldn’t have been surprising). My new RSS reader of choice, [NetNewsWire](https://ranchero.com/netnewswire/), only currently offers syncing with Feedbin. While NNW is open source and free to use, syncing services cost money to operate. I realized that the “closed web” (e.g. Twitter, Facebook, et. al.) has so accustomed me to paying with my data and not my money that I simply expected a similar arrangement from everyone else.

RSS is an open web technology, and there are many ways to consume RSS feeds without paying a single dime. But _syncing_ between devices is a _service_ that is not trivial to implement, and requires labor. That labor must be compensated.

Perhaps the first step to “fixing" the web is accepting that we need to pay for its benefits, and perhaps that means enjoying fewer benefits. Perhaps we could all use some subtraction of “content” in our lives.

### Reading

I finished Marilynne Robinson’s [/What Are We Doing Here?/](https://www.indiebound.org/book/9781250310385) on the plane to Nashville. Her love for the Puritans almost makes me want to love them too.

I’m also tearing through David Koepp's [Cold Storage](https://www.indiebound.org/book/9780062916433). Really enjoying this one.

### Watching

Disney+’s _The Imagineering Story_ is making me miss Disneyland, and leaves me wondering if I want to start a new career as an Imagineer. 

### Listening

[The most recent Ultima Thule podcast](https://www.ultimathule.info/listen.html) provided soothing soundscapes for the return flight.

### Links

Not much internet reading this week, but I commend to you [David Zahl’s foreword to a collection of sermons by our church’s Rector, Paul N. Walker.](https://mbird.com/2019/11/now-available-faith-once-delivered-sermons-by-paul-n-walker/)