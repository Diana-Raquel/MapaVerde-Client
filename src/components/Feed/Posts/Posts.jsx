import SinglePost from '../SinglePost/SinglePost';
import classes from './Posts.module.scss';

const Posts = ({ posts = [] }) => {
  const mappedPosts = posts.map(event => {
    return (
      <SinglePost
        key={event._id}
        title={event.title}
        description={event.description}
        image={event.image}
      />
    );
  })

  return (
    <section className={classes["feed-posts-section"]} >
      <h3> Eventos! </h3>

      <div className={classes["posts"]}>
        {mappedPosts}
      </div>
    </section>
  );
}

export default Posts;