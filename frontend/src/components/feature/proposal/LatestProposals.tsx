import { useFetch } from "../../../lib/hooks/useFetch";
import Loading from "../../common/Loading";

export default function LatestProposals() {
  //TODO: format the data to be displayed
  const { data, isLoading } = useFetch({ url: "/api/proposal/latest" });
  console.log(data);
  return (
    <section>
      {isLoading && <Loading loadingText="Loading latest proposals..." />}
      {data && <h2>Data loaded!</h2>}
    </section>
  );
}
