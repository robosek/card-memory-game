import { IConfig } from 'overmind'

const config = {}

declare module 'overmind' {
  // tslint:disable:interface-name
  interface Config extends IConfig<typeof config> {}
}