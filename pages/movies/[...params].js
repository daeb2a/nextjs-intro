import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const [title] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  /* console.log(ctx); */
  return {
    props: {
      params,
    },
  };
}