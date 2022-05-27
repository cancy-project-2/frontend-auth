import { client, Provider } from "@cancy-project/api";
import MyTicketList from "./mytickets.component";

export default function Root(props) {
  return (
    <Provider value={client}>
      <p>{`${props.name} is mounted!`}</p>
    </Provider>
  );
}
