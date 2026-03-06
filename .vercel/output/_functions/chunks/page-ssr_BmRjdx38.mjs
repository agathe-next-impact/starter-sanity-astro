import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"2024-01-01","projectId":"sym9ypo5","dataset":"production","useCdn":true}
          );

globalThis.sanityClient = sanityClient;
