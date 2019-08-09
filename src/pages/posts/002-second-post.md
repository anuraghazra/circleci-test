---
title: "Second Post"
date: "2019-01-01"
author: "Anurag Hazra"
image: "../../images/two.png"
---

# Starting up gatsby

today we are going to get started wih gatsby blog site `ovy-blog`

## table of content
- one
- two
  - two-1
  - two-2
- three


run these code in **gatsby-node.js**
```javascript{numberLines: true}
const gatsby = new AwesomeGatsby()

// nice
if (gatsby.isCool()) {
  gatsby.use();
};
```

now lets add some css

```css
.post {
  margin: 50px 0;
  padding: 30px 50px;
  line-height: 30px;
  background-color: white;
  box-shadow: 0 0 20px 5px rgba(0,0,0,0.1);
  border-radius: 10px;
}

.header {
  color: #303030;
}

.info {
  color: gray;
}

.thumbnail {
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 300px;
} 

.description {
  color: #1f1f1f;
  margin: 20px 0;
}

.link {
  color: white;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  background-color: #0059ff;
}
``