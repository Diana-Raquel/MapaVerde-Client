import classes from './SinglePost.module.scss';
//import { MdFavoriteBorder, MdBookmarkBorder } from 'react-icons/md';

const SinglePost = ({ title = "", description = "", image = "" }) => {
  return (
    <article className={classes["post"]} >
      <h4> {title} </h4>
      <p>
        {description}
      </p>

      <figure>
        <img src={image} alt="Post  Image" />
      </figure>

      <div className={classes["actions"]}>
        <div>
        </div>

        <div>
        </div>
      </div>
    </article>
  );
}

export default SinglePost;