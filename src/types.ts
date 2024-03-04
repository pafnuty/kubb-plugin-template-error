import type { PluginFactoryOptions } from '@kubb/core'

export type Options = {
  output?: string
}

type ResolvedOptions = {}

export type PluginOptions = PluginFactoryOptions<'plugin-demo', Options, ResolvedOptions, never, never, never>

declare module '@kubb/core' {
  export interface _Register {
    ['@kubb/swagger-tanstack-query']: PluginOptions
  }
}
