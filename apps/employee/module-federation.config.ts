import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'employee',
  remotes: ['login'],
};

export default config;
