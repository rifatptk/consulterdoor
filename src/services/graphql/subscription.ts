import { API } from 'aws-amplify';

const onMessageReceivedSubscriptionApi = async (id: string) => {
    const onMessageReceivedSubscriptionQuery = `subscription OnMessageReceivedSubscription($id:String!){
        onMessageReceived(id: $id) {
          id
          message
        }
      }`;
    const subs: any = API.graphql({
        query: onMessageReceivedSubscriptionQuery,
        variables: {
            id
        }
    });
    subs.subscribe({
        next: (data: any) => {
            // TODO
        },
    });
};

export { onMessageReceivedSubscriptionApi };
