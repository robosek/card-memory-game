import { IConfig, createOvermind } from 'overmind'
import { state } from './state'
import * as actions from './actions'

const config = { state, actions}

declare module 'overmind' {
  // tslint:disable:interface-name
  interface Config extends IConfig<typeof config> {}
}

export const overmind = createOvermind(config)