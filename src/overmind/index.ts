import { IConfig, createOvermind } from 'overmind'
import { createHook } from 'overmind-react'
import { state } from './state'
import * as actions from './actions'
import { onInitialize } from './onInitialize'

const config = {
  onInitialize, 
  state, 
  actions
}

declare module 'overmind' {
  // tslint:disable:interface-name
  interface Config extends IConfig<typeof config> {}
}

export const overmind = createOvermind(config)
export const useOvermind = createHook(overmind)