import AccountList from "../components/feature/account/AccountList";
import LatestProposals from "../components/feature/proposal/LatestProposals";
import Container from "../components/layout/main/Container";

export default function Demo() {
  return (
    <Container>
      <h1>Demonstration</h1>
      <AccountList/>
      <LatestProposals/>
    </Container>
  )
}
