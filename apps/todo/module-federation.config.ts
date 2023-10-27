import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'todo',
  exposes: {
    './Module': 'apps/todo/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
