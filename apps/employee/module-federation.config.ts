import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'employee',
  remotes: ['login', 'todo'],
};

export default config;
