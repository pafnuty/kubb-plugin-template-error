import {  createPlugin } from '@kubb/core'
import type { PluginOptions } from './types.ts'

export const pluginName = 'plugin-demo' satisfies PluginOptions['name']

export const definePlugin = createPlugin<PluginOptions>((options) => {

  return {
    name: pluginName,
    options
  }
})
