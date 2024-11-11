import { useFetch } from "../../../lib/hooks/useFetch"
import Loading from "../../common/Loading";

export default function LatestProposals() {
    const {data, isLoading} = useFetch({url:'/api/proposals/latest'});
  return (
    <section>
      {isLoading && <Loading loadingText="Loading latest proposals..."/>}
    </section>
  )
}
