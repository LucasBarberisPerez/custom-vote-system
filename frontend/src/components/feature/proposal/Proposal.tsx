import styles from "./proposal.module.scss";

interface Proposal {
  id: number;
  title: string;
  desc: string;
  voteDate: string;
  votesInFavor: number;
  votesAgainst: number;
}
export default function Proposal(props: Proposal) {
  return (
    <div key={props.id} className={styles.proposal_info}>
      <h3 className={styles.proposal_title}>{props.title}</h3>
      <p><b>Date of vote:</b> {props.voteDate}</p>
      <p className={styles.proposal_desc}>{props.desc}</p>
      <div className={styles.result_info}>
        <span className={styles.favor}><b>Votes in favor:</b> {props.votesInFavor}</span>
        <span className={styles.against}><b>Votes against:</b> {props.votesAgainst}</span>
      </div>
    </div>
  );
}
