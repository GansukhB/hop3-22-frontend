export default function PostItem(props) {
  return (
    <div>
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
    </div>
  );
}
