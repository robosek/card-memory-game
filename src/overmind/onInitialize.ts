import { OnInitialize } from 'overmind'

export const onInitialize: OnInitialize = ({actions}) => {

    actions.generateCards()
}