import Head from "next/head";

type Props = {
  title: string;
};

const MetaData = (props: Props) => {
  const { title } = props;
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
export default MetaData;
