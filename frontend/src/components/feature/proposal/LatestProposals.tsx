import { useFetch } from "../../../lib/hooks/useFetch";
import { ProposalData } from "../../../lib/model/Proposal";
import Loading from "../../common/Loading";
import Proposal from "./Proposal";
import styles from "./proposal.module.scss";

export default function LatestProposals() {
  const { data, isFetching } = useFetch<ProposalData[]>({ url: "/api/proposal/latest" });
  return (
    <section className={styles.proposal_section}>
      {isFetching && <Loading loadingText="Loading proposals..." />}
      {!isFetching && !data && <h2>No proposals found</h2>}
      {!isFetching && data && (
        <>
          <h2>Latest proposals</h2>
          <div className={styles.proposal_container}>
            {data?.map((proposal) => (
              <Proposal key={proposal.id} {...proposal} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
