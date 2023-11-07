import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: "xfkatw18",
    dataset: "production",
    apiVersion: "2023-03-09",
};

const client = createClient(config);

export default client;