url = "https://robertsapunarich.micro.blog/feed.json"
response = await fetch(url)

if (response.ok) {
  payload = await response.json()

  for (post in payload.items) {
    console.log(post.content_html)
  }
}