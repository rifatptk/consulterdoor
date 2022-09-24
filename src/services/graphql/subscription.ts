import { API } from 'aws-amplify';

const onMessageReceivedSubscriptionApi = async (
  id: string,
  callback: (data: any) => void
) => {
  const onMessageReceivedSubscriptionQuery = `subscription OnMessageReceivedSubscription($id:String!){
        onMessageReceived(id: $id) {
          id
          message
        }
      }`;
  const subs: any = API.graphql({
    query: onMessageReceivedSubscriptionQuery,
    variables: {
      id,
    },
  });
  subs.subscribe({
    next: (data: any) => {
      // TODO
      callback(data);
    },
  });
};

export { onMessageReceivedSubscriptionApi };
