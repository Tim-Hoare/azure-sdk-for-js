/* 
 Setup: Enter your storage account name and shared key in main()
*/

import { StorageSharedKeyCredential, QueueServiceClient } from "../../src"; // Change to "@azure/storage-queue" in your package

async function main() {
  // Enter your storage account name and shared key
  const account = process.env.ACCOUNT_NAME || "";
  const accountKey = process.env.ACCOUNT_KEY || "";

  // Use StorageSharedKeyCredential with storage account and account key
  // StorageSharedKeyCredential is only avaiable in Node.js runtime, not in browsers
  const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);

  const queueServiceClient = new QueueServiceClient(
    `https://${account}.queue.core.windows.net`,
    sharedKeyCredential,
    {
      // proxy can either be a URL like "http://localhost:3128"
      // or
      // an option bag consisting {host, port, username, password }
      proxy: { host: "http://localhost", port: 3128, username: "username", password: "password" }
      // if proxy is undefined, the library tries to load the proxy settings from the environment variables like HTTP_PROXY
    }
  );

  // Create a new queue
  const queueName = `newqueue${new Date().getTime()}`;
  const queueClient = queueServiceClient.getQueueClient(queueName);
  const createQueueResponse = await queueClient.create();
  console.log(
    `Create queue ${queueName} successfully, service assigned request Id: ${createQueueResponse.requestId}`
  );

  // Delete the queue.
  const deleteQueueResponse = await queueClient.delete();
  console.log(
    `Delete queue successfully, service assigned request Id: ${deleteQueueResponse.requestId}`
  );
}

// An async method returns a Promise object, which is compatible with then().catch() coding style.
main()
  .then(() => {
    console.log("Successfully executed the sample.");
  })
  .catch((err) => {
    console.log(err.message);
  });
