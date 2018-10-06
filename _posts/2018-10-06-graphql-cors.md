---
layout: post
title:  SPAs, CORS, and GraphQL
date:   2018-10-06
categories: technology
---

The popularity of single page applications (SPAs) has grown significantly in the world of web development over the last few years. As with any architectural choice, benefits and tradeoffs exist.

[This article from Free Code Camp](https://medium.freecodecamp.org/the-terrible-performance-cost-of-cors-api-on-the-single-page-application-spa-6fcf71e50147) recently highlighted a potential performance cost associated with single page applications. I'll do my best to accurately and succinctly restate the problem presented in the article:

* An SPA is served from `app.example.com`.
* Our SPA consumes an API served from `api.example.com`.
* [According to Mozilla developer network](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS),

>Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin. A web application makes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, and port) than its own origin.

* CORS is not an issue when it's a ["simple request"](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests#Simple_requests), but does introduce problems when it's a [preflighted request](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests#Preflighted_requests).

* Preflighted requests first send a request with the `OPTIONS` method prior to making the actual request for data. Because the value of the `Content-Type` header sent by an SPA is frequently `application/json`, requests from the SPA will be preflighted -- mean that we make two requests each time we fetch data from the API.

According to the article,

>We can use the Access-Control-Max-Age header to cache the results of a preflight request. The next time we access the resource api.example.com/users/report/12345 from spa.example.com there is no preflight request.

>Yes, that’s true, but then remember the title — The terrible performance cost of CORS requests on the single-page application (SPA). This comes from the API that we’re are consuming and the way it’s been designed. In our example, we designed our API /users/report/:id, where :id means its a value that can change.

  >The way preflight cache works is per URL, not just the origin. This means that any change in the path (which includes query parameters) warrants another preflight request.

>So in our case, to access resource api.example.com/users/report/12345 and api.example.com/users/report/123987, it will trigger four requests from our SPA in total.

The key sentence in the foregoing quote is "This comes from the API ... and the way it’s been designed." Enter GraphQL.

Unlike a REST API, the URL for each request to a GraphQL API remains the same regardless of the resource. Instead, a query body is `POST`ed to the URL as JSON, and the resolution of the query is handled by the server. 

To work with the foregoing example, let's say we have a GraphQL API residing at `api.example.com/graphql`. In order to get the report with an `id` of `12345`, our SPA would make a preflighted request with the `OPTIONS` method to get the approved list of actions for `api.example.com/graphql`. It would then make a `POST` to the same URL with with following query body:

```
query {
  users {
    report(id: "12345") {
      id
      content
    }
  }
}
```

Our API would then handle the query and return the `id` and `content` for the report with an ID of `12345`. While there are certainly some other improvements that can be made to the design of the API (for example, I would scope the query for a report to a given user, so our query body would say something like `user(id: 1)` instead of just `users`), the key strength of GraphQL in this example is that we only need to make one preflighted request if cache the results of the preflighted request with the `Access-Control-Max-Age` header, since all requests from our SPA can now be made to the same URL.