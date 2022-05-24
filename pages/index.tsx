import dynamic from "next/dynamic";

const Starscape = dynamic(() => import('../components/Starscape'), {ssr: false})

const Page = (): JSX.Element => <Starscape />;

export default Page;
