import photo1 from "../../images/1.png";
import photo2 from "../../images/2.png";
import photo3 from "../../images/3.png";
import photo4 from "../../images/4.png";
import classes from "./Blog.module.css";
import BlogNavigation from './BlogNavigation';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Ultimate Guide to Hot Pot at Home",
      img: photo1,
      author: "Ivan Ivanov",
      date: "17.10.2021",
      postPreview:
        "One of my all time favorite meals is hot pot. It can be a cold and cozy night or a warm summer evening – it doesn’t matter because hot pot is always the answer.Hot pot in Chinese is called huǒ guō (fire pot) or dǎ biān lú (fight the furnace). It’s a fun and filling way to spend the night eating and chatting because you’re literally hanging around...",
        tag: "World Cuisine"
    },
    {
      id: 2,
      title: "On ethics of eating Herbert",
      img: photo2,
      author: "Herbert",
      date: "11.10.2021",
      postPreview: "Please don’t!!!",
      tag: "Herbert"
    },
    {
      id: 3,
      title: "Gordon Ramsay Restaurant List, His Life and Work",
      img: photo3,
      author: "Kellie Black",
      date: "03.10.2021",
      postPreview:
        "Chef Gordon Ramsay is larger than life. People might find him either intolerable or entertaining, especially for his short temper and extensive use of the F* word. The fact is, unless you've been living under a rock, you know who we're talking about, the single most famous Scottish Chef on the planet. Chef Ramsay appears on a wide variety of TV shows, he... ",
        tag: 'Famous Chef'
    },
    {
      id: 4,
      title: "Tiktok Salmon Rice Bowl",
      img: photo4,
      author: "Damon Collins",
      date: "03.10.2021",
      postPreview:
        "Flaky salmon, fluffy rice, soy sauce, kewpie mayo, sriracha, avocado, kimchi, and seaweed come together in the perfect Tiktok salmon rice bowl. There’s a viral Tiktok going around of Emily Mariko making a salmon rice bowl. It’s the latest in a long line of viral Tiktok trends: dalgona coffee, cloud bread, baked feta pasta, Tiktok ramen, and now, the Tiktok salmon rice bowl",
        tag: "Featured"
    },
  ];

  const authors = [];
  const tags = [];
  for(const key in posts ) {
      authors.push ({
          author: posts[key].author
      })
      tags.push({
          tag: posts[key].tag
      })
  }

  return (
    <section className={classes.posts}>
      <div>
        {posts.map((post) => (
          <div className={classes.post} key={post.id}>
            <img
              className={classes.post__img}
              src={post.img}
              alt={post.title}
            />
            <div className={classes.post__text}>
              <span className={classes.post__title}>{post.title}</span>
              <div className={classes.post__data}>
                <span className={classes.post__author}>{post.author}</span>
                <span className={classes.post__date}>{post.date}</span>
              </div>

              <p className={classes.post__preview}>{post.postPreview}</p>
            </div>
          </div>
        ))}
      </div>
      <BlogNavigation tags={tags} authors={authors} />
    </section>
  );
};

export default Blog;
