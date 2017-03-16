import { TABS } from '../constants/tabTypes'

export const getTab = (item) => {
  return TABS.find(tab => tab.name === (item.top ? 'top' : (item.good ? 'good' : item.tab)))
}
